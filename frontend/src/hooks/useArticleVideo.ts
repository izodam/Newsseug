import { fetchEachArticle } from 'apis/articleVideoApi';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useArticleVideo = (articleId: number) => {
  return useQuery({
    queryKey: ['articleVideo', articleId],
    queryFn: () => fetchEachArticle(articleId),
    staleTime: 1000 * 60 * 2,
    enabled: !!articleId,
  });
};

export const prefetchVideos = (
  queryClient: ReturnType<typeof useQueryClient>,
  articleIds: number[],
  activeIndex: number,
) => {
  const prevId = articleIds[activeIndex - 1];
  const nextId = articleIds[activeIndex + 1];

  if (prevId) {
    queryClient.prefetchQuery({
      queryKey: ['articleVideo', prevId],
      queryFn: () => fetchEachArticle(prevId),
      staleTime: 1000 * 60 * 2,
    });
  }

  if (nextId) {
    queryClient.prefetchQuery({
      queryKey: ['articleVideo', nextId],
      queryFn: () => fetchEachArticle(nextId),
      staleTime: 1000 * 60 * 2,
    });
  }
};
