import React, { ReactNode, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Page {
  id: string;
  content: ReactNode;
}

const PageStack = () => {
  const [pages, setPages] = useState<Page[]>([{ id: 'home', content: <div>Home Page</div> }]);

  const pushPage = (content: React.ReactNode) => {
    setPages((prev) => [...prev, { id: `page-${prev.length}`, content }]);
  };

  const popPage = () => {
    setPages((prev) => prev.slice(0, -1));
  };

  return (
    <div className="page-stack">
      <TransitionGroup component={null}>
        {pages.map((page, index) => (
          <CSSTransition key={page.id} timeout={300} classNames="page">
            <div
              className="page"
              style={{
                zIndex: pages.length - index, // 가장 최근 페이지가 위에 보이도록 설정
              }}
            >
              {page.content}
              {index === pages.length - 1 && (
                <button onClick={() => pushPage(<div>Page {index + 2}</div>)}>Next Page</button>
              )}
              {pages.length > 1 && index === pages.length - 1 && (
                <button onClick={popPage}>Go Back</button>
              )}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PageStack;
