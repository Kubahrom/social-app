import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Container, Transition } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

import { FETCH_POSTS_QUERY } from '../utils/graphql';
import { AuthContext } from '../context/auth';

const Home: React.FC = () => {
  const { user } = useContext(AuthContext);
  const { loading, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POSTS_QUERY
  );
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <Container textAlign="center">
          <h1>Recent Posts</h1>
        </Container>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h2>Loading posts...</h2>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post: any) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
