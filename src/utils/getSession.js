import instance from './instance';

const getSession = async (session) => {
  try {
    await instance.get('/user', {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};

export default getSession;