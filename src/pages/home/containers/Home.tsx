import { FC, useEffect } from 'react';

import { useGet } from 'src/common/hooks/useFetch';

const containers: FC = () => {
  const [lista, forceGet] = useGet<Array<any>>('https://jsonplaceholder.typicode.com/posts', true);

  const asdasd = () => {
    forceGet();
    console.log(lista);
  };

  return (

    <>
      {lista?.map((item: any) => (
        <p>{item.title}</p>
      ))}
      <p>Teste de alguma coisa nesse mundo de meu deus pq mano do ceu</p>
      <button type="button" onClick={() => asdasd()}>Teste</button>
    </>
  );
};

export default containers;
