import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Grid, Container } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

const Home: React.FC = () => {
  const { loading, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POST_QUERY
  );
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <Container textAlign="center">
          <h1>Recent Posts</h1>
        </Container>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h2>Loading posts...</h2>
        ) : (
          posts &&
          posts.map((post: any) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
};

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
