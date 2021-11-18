import React, { useState } from 'react';
import {
  Header,
  Modal,
  Form,
  TextArea,
  Comment,
  Divider
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { addComment } from '../../redux/actions';

const Commenting = ({
  repoID,
  isOpen,
  setIsOpen,
  repoName,
  comments,
  addComment
}) => {
  const [comment, setComment] = useState('');

  const onNewComment = () => {
    const date = new Date();

    const newComment = {
      date: `${date?.toDateString()} at ${date?.toLocaleTimeString()}`,
      text: comment
    };

    addComment({ comment: newComment, repoID });
    setComment('');
  };

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      closeIcon
    >
      <Modal.Header>Commenting</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Add a new comment to the repo "{repoName}":</Header>

          <Form onSubmit={onNewComment}>
            <TextArea
              value={comment}
              onInput={e => setComment(e.target.value)}
              placeholder="Share your thoughts.."
            />
            <Form.Button style={{ marginTop: 14 }} circular color="grey">
              Add Comment
            </Form.Button>
          </Form>

          {comments[repoID]?.length > 0 && (
            <>
              <Divider section />

              <Comment.Group>
                <Header>Previous comments on {repoName}:</Header>

                {comments[repoID]?.map(({ date, text }) => (
                  <Comment key={date}>
                    <Comment.Content>
                      <Comment.Author as="a">You</Comment.Author>

                      <Comment.Metadata>{date}</Comment.Metadata>

                      <Comment.Text>{text}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                ))}
              </Comment.Group>
            </>
          )}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = ({ comments }) => ({ comments });

const mapDispatchToProps = dispatch => ({
  addComment: ({ comment, repoID }) => dispatch(addComment({ comment, repoID }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Commenting);
