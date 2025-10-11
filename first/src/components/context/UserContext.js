import React from 'react';
//If any value given to provider, that value will be passed to all the consumers
//If no value is given to provider, default value will be passed to all the consumers
//Default value is given while creating context
const UserContext= React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };