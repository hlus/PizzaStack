import { QueryResult } from '@apollo/client';

export const validateApolloResponse = <TD extends unknown, TV extends object>(queryResult: QueryResult<TD, TV>) => {
  if (queryResult.error) {
    throw new Error('Упс, шось пішло не так 😢 Спробуйте будь лазка пізніше.');
  }
};
