import styled from 'styled-components';
import Scrap from './Folder';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MemberFolderInfo, MemberFolderList } from 'types/api/folder';
import { getMemberFolderList } from 'apis/memberApi';
import { useDispatch } from 'react-redux';
import { setMemberFolder } from '../../redux/memberFolderSlice';

function Scraps() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const width = '120px';
  const height = '160px';
  const handleClick = (folderId: number, title: string) => {
    navigate(`folders/${folderId}`, { state: { title } });
  };

  const {
    data: memberFolderList,
    isLoading,
    error,
  } = useQuery<MemberFolderList>(
    ['memberFolderList'],
    () => getMemberFolderList(),
    {
      onSuccess: (data) => {
        dispatch(setMemberFolder(data));
      },
    },
  );

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (error) {
    const errorMessage =
      error instanceof Error ? error.message : '알 수 없는 오류';
    return <div>사용자 폴더 목록 조회 실패: {errorMessage}</div>;
  }

  return (
    <Wrapper>
      {Array.isArray(memberFolderList?.folders) &&
        memberFolderList?.folders.map((folder: MemberFolderInfo) => (
          <Scrap
            key={folder.id}
            width={width}
            height={height}
            thumbnailUrl={folder.thumbnailUrl}
            folderCnt={folder.articleCount}
            folderTitle={folder.name}
            onClick={() => handleClick(folder.id, folder.name)}
          />
        ))}
    </Wrapper>
  );
}

export default Scraps;

const Wrapper = styled.div`
  display: flex;
  width: 100%; /* 부모 요소의 너비에 맞춤 */
  max-width: 100%; /* 최대 부모 요소의 너비만큼 차지 */
  align-items: flex-start;
  gap: 8px;
  overflow-x: auto; /* x축 스크롤 가능 */
  white-space: nowrap; /* 자식 요소들이 줄바꿈되지 않도록 설정 */
  scroll-behavior: smooth; /* 부드러운 스크롤 */

  & > * {
    flex-shrink: 0; /* 자식 요소가 축소되지 않도록 설정 */
  }

  /* 스크롤 바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
  -ms-overflow-style: none;
`;
