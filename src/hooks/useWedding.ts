import { useSuspenseQuery } from '@tanstack/react-query';
import { getWedding } from '@/api/wedding';
import { Wedding } from '@/models/wedding';

const useWedding = () => {
  const { data = {} as Wedding, isError } = useSuspenseQuery<Wedding>({
    queryKey: ['wedding'],
    queryFn: () =>
      getWedding().then((res) => {
        if (!res.ok) {
          throw new Error('청첩장 정보를 불러오는데 실패했습니다.');
        }

        return res.json();
      }),
  });

  return {
    wedding: data,
    isError,
  };
};

export default useWedding;
