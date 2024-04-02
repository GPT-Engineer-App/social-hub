import { Box, Heading, Button, Text, Image, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { FaSignInAlt, FaUserPlus, FaSignOutAlt, FaUsers, FaPlusCircle, FaRegThumbsUp, FaRegThumbsDown, FaQuoteLeft, FaUserCheck, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [communities, setCommunities] = useState([
    { id: 1, name: "React Developers", members: 1024, joined: false },
    { id: 2, name: "JavaScript Enthusiasts", members: 1552, joined: false },
  ]);

  const handleLogin = () => {
    // TODO: Implement actual login
    setLoggedIn(true);
    setUsername("johndoe");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  const handleJoinCommunity = (id) => {
    const updatedCommunities = communities.map((c) => (c.id === id ? { ...c, joined: true, members: c.members + 1 } : c));
    setCommunities(updatedCommunities);
  };

  const handleLeaveCommunity = (id) => {
    const updatedCommunities = communities.map((c) => (c.id === id ? { ...c, joined: false, members: c.members - 1 } : c));
    setCommunities(updatedCommunities);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        SNS App Prototype
      </Heading>

      {!loggedIn && (
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Welcome! Please log in or register.
          </Heading>
          <Button leftIcon={<FaSignInAlt />} colorScheme="blue" mr={4} onClick={handleLogin}>
            Log In
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="green">
            Register
          </Button>
        </Box>
      )}

      {loggedIn && (
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Welcome back, {username}!
          </Heading>
          <Button leftIcon={<FaSignOutAlt />} onClick={handleLogout}>
            Log Out
          </Button>
        </Box>
      )}

      <Heading as="h2" size="xl" mb={4}>
        Communities
      </Heading>
      {communities.map((community) => (
        <Box key={community.id} p={4} borderWidth={1} mb={4}>
          <Heading as="h3" size="lg" mb={2}>
            {community.name}
          </Heading>
          <Text mb={2}>{community.members} members</Text>
          {!community.joined && (
            <Button colorScheme="blue" leftIcon={<FaUsers />} onClick={() => handleJoinCommunity(community.id)}>
              Join Community
            </Button>
          )}
          {community.joined && (
            <>
              <Box mb={4}>
                <Heading as="h4" size="md" mb={2}>
                  Create a Post
                </Heading>
                <Input placeholder="Title" mb={2} />
                <Textarea placeholder="Content" mb={2} />
                <Button colorScheme="blue" leftIcon={<FaPlusCircle />}>
                  Post
                </Button>
              </Box>
              <Box mb={4}>
                <Heading as="h4" size="md" mb={2}>
                  Recent Posts
                </Heading>
                {/* TODO: Display actual posts */}
                <Box p={4} borderWidth={1} mb={2}>
                  <Heading as="h5" size="sm" mb={2}>
                    Post Title
                  </Heading>
                  <Text mb={2}>Post content goes here...</Text>
                  <Button size="sm" leftIcon={<FaRegThumbsUp />} mr={2}>
                    Like
                  </Button>
                  <Button size="sm" leftIcon={<FaRegThumbsDown />} mr={2}>
                    Dislike
                  </Button>
                  <Button size="sm" leftIcon={<FaQuoteLeft />}>
                    Quote
                  </Button>
                </Box>
              </Box>
              <Button colorScheme="red" leftIcon={<FaSignOutAlt />} onClick={() => handleLeaveCommunity(community.id)}>
                Leave Community
              </Button>
            </>
          )}
        </Box>
      ))}

      {loggedIn && (
        <Box mt={8}>
          <Heading as="h2" size="xl" mb={4}>
            User Actions
          </Heading>
          <Button colorScheme="green" leftIcon={<FaPlusCircle />} mb={4}>
            Create Community
          </Button>
          <Button colorScheme="blue" leftIcon={<FaUserCheck />} mb={4}>
            Follow User
          </Button>
          <Button colorScheme="purple" leftIcon={<FaEnvelope />}>
            Send Direct Message
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Index;
