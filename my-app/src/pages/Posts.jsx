import React, { useEffect, useMemo, useRef, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostForms from "../components/PostForms";
import PostList from "../components/PostList";
import MyButton from "../components/ui/buttons/MyButton";
import MyModal from "../components/ui/MyModal/MyModal";
import { usePost } from "../Hooks/usePost";
import PostService from "../APi/PostService";
import { useFetching } from "../Hooks/useFetching";
import { getPageCount, getPagesCount } from "../utils/pages";
import MyPagination from "../components/ui/pagination/MyPagination"; 

function Posts() {
  const [posts, setPosts] = useState([]);


  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const observer = useRef();
  console.log(lastElement)
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
  setPosts([...posts,...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    if(isPostLoading) return;
    if(observer.current) observer.current.disconnect();
    let callback = (entries, observer) => {
      if(entries[0].isIntersecting && page < totalPages) setPage(page +1)
      }
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostLoading])
  useEffect(() => {
    fetchPosts()
  }, [page])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 25 }} onClick={() => setModal(true)}>Add new one</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForms create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
        <PostList remove={removePost} sheets={sortedAndSearchedPosts} title='Post list 1' />
        <div ref={lastElement} style={{height:20}}></div>
      {isPostLoading &&
        <h1 style={{ textAlign: 'center' }}>Loading ...</h1>
      }
      <MyPagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;