import { getCurrentUser } from '@/lib/actions/auth.action';
import React from 'react';
import { Button } from './ui/button';
import Logout from './Logout';

const ActionButton = async () => {
  const user = await getCurrentUser();
  
  return (
    <div>
      {user ? (
        <Logout />
      ) : (
        <Button asChild>
          <a href="/signin">Signin</a>
        </Button>
      )}
    </div>
  );
};

export default ActionButton;
