import React, { Component } from 'react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import axios from 'axios';
import Navbar from './navbar/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: '',
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=de683980dfd14cff8754bd92cec2932e'
      )
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: 'error retreveing data', loading: false });
      });
  }

  render() {
    const { errorMsg, posts, loading } = this.state;
    const PostList = styled.div`
      .loading {
        width: 500px !important;
      }
      .loading-background {
        display: flex;
        background-color: #191f26;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
      }
      img {
        width: 100%;
      }
      .border-top {
        border-top: 1px solid #e2e2e2;
      }
      .margin-top-30 {
        margin-top: 20px;
      }
      .background-color-white {
        background-color: white;
      }
      .margin-top-10 {
        margin-top: 10px;
      }
      .margin-bottom-30 {
        margin-bottom: 30px;
      }
      .height-100 {
        height: 100%;
      }
      .margin-bottom-120 {
        margin-bottom: 120px;
      }
      .banner-img-1 {
        width: 99%;
        object-fit: cover;
        height: 375px;
      }
      .banner-img-2 {
        width: 100%;
        object-fit: cover;
        height: 185px;
      }
      .margin-bottom-60 {
        margin-bottom: 60px;
      }

      .banner-img-3 {
        margin-bottom: 5px;
        width: 100%;
        object-fit: cover;
        height: 185px;
      }
      .margin-bottom-10 {
        padding-bottom: 10px;
      }
      .flex-direction {
        display: flex;
        flex-direction: column;
      }
      .flex-direction {
        display: flex;
        justify-content: space-between !important;
      }
      .relative {
        position: relative;

        color: white;
      }
      .bottom-left {
        margin: 0px 10px 20px 20px;
        position: absolute;
        bottom: 8px;
        font-size: 20px;
        left: 16px;
      }
      .sidebar {
        height: 100%;
        &-category {
          cursor: pointer;
          padding: 15px 15px 15px 30px;
          display: flex;
          align-items: center;
          font-size: 20px;
        }
        &-category:hover {
          cursor: pointer;
          background-color: #c0daec !important;
          padding: 15px 15px 15px 30px;
          display: flex;
          align-items: center;
          font-size: 20px;
        }
        label {
          cursor: pointer;
          margin-left: 10px;
        }
      }
      .card {
        border: 1px solid rgb(233, 233, 233);
        &-img {
          height: 100px;
          width: 100%;
        }
        img {
          width: 100%;
          object-fit: cover;
          height: 180px;
        }
        &-content {
          background: white;
          padding: 20px;
          &-title {
            margin-bottom: 10px;
            font-weight: 700;
          }
          &-date {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            &-label {
              margin-left: 10px;
            }
          }
        }
      }
    `;
    const onCategories = category => {
      this.setState({ posts: [], loading: true });
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=de683980dfd14cff8754bd92cec2932e`
        )
        .then(response => {
          console.log(response);
          this.setState({ posts: response.data, loading: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ errorMsg: 'error retreveing data', loading: false });
        });
    };
    return (
      <PostList>
        {console.log(this.props)}
        {loading ? (
          <div className='loading-background'>
            <img alt='img' className='loading' src='loading.gif' alt='' />
          </div>
        ) : (
          <>
            <Navbar />
            <div className='gridku'>
              <div className='ukuran-md-3 '>
                <div className='background-color-white border-top sidebar'>
                  <div
                    className='sidebar-category'
                    onClick={() => onCategories('entertainment')}
                  >
                    <FontIcon iconName='Home'></FontIcon>
                    <label htmlFor=''>Beranda/ Home</label>
                  </div>
                  <div
                    className='sidebar-category'
                    onClick={() => onCategories('business')}
                  >
                    <FontIcon iconName='BusinessCenterLogo'></FontIcon>
                    <label htmlFor=''>Bussiness and Work</label>
                  </div>

                  <div
                    className='sidebar-category'
                    onClick={() => onCategories('health')}
                  >
                    <FontIcon iconName='Health'></FontIcon>
                    <label htmlFor=''>Health and Fitnes</label>
                  </div>
                  <div
                    className='sidebar-category'
                    onClick={() => onCategories('science')}
                  >
                    <FontIcon iconName='BookAnswers'></FontIcon>
                    <label htmlFor=''>Science</label>
                  </div>
                  <div
                    className='sidebar-category'
                    onClick={() => onCategories('sports')}
                  >
                    <FontIcon iconName='MoreSports'></FontIcon>
                    <label htmlFor=''>Sports</label>
                  </div>
                  <div
                    className='sidebar-category'
                    onClick={() => onCategories('technology')}
                  >
                    <FontIcon iconName='WindowsLogo'></FontIcon>
                    <label htmlFor=''>Technology in the World</label>
                  </div>
                </div>
              </div>
              <div className='ukuran-md-8'>
                <div className='gridku margin-bottom-60 margin-top-30 no-gutters'>
                  <div className='ukuran-md-8'>
                    {console.log(
                      posts &&
                        posts.articles[0] &&
                        posts.articles[0].urlToImage &&
                        posts.articles[0].urlToImage.replace(
                          '?wid=54&w=650&v=1&t=jpeg',
                          ''
                        )
                    )}
                    <div className='relative'>
                      <img
                        alt='img'
                        className='banner-img-1'
                        src={
                          posts && posts.articles && posts.articles[0]
                            ? posts.articles[0].urlToImage.replace(
                                '?wid=54&w=650&v=1&t=jpeg',
                                ''
                              )
                            : null
                        }
                      ></img>
                      <div class='bottom-left h1'>
                        {posts && posts.articles && posts.articles[0]
                          ? posts.articles[0].title
                          : null}
                      </div>
                    </div>
                  </div>
                  <div className='ukuran-md-4'>
                    <div className='flex-space flex-direction height-100'>
                      <div className='relative'>
                        <img
                          alt='img'
                          className='banner-img-2'
                          src={
                            posts && posts.articles && posts.articles[1]
                              ? posts.articles[1].urlToImage.replace(
                                  '?wid=54&w=650&v=1&t=jpeg',
                                  ''
                                )
                              : null
                          }
                        />
                        <div class='bottom-left h1'>
                          {posts && posts.articles && posts.articles[1]
                            ? posts.articles[1].title.slice(0, 30) + '...'
                            : null}
                        </div>
                      </div>
                      <div className='relative'>
                        <img
                          alt='img'
                          className='banner-img-3'
                          src={
                            posts && posts.articles && posts.articles[2]
                              ? posts.articles[2].urlToImage.replace(
                                  '?wid=54&w=650&v=1&t=jpeg',
                                  ''
                                )
                              : null
                          }
                        />
                        <div class='bottom-left h1'>
                          {posts && posts.articles && posts.articles[2]
                            ? posts.articles[2].title.slice(0, 30) + '...'
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1>News</h1>
                <div className='gridku'>
                  {posts && posts.articles
                    ? posts.articles.map((post, key) =>
                        key !== 0 && key !== 1 && key !== 2 ? (
                          <div
                            className='ukuran-md-4 margin-bottom-30'
                            key={key}
                          >
                            <div className='card'>
                              <img
                                alt='img'
                                src={
                                  post &&
                                  post.urlToImage &&
                                  post.urlToImage.replace(
                                    '?wid=54&w=650&v=1&t=jpeg',
                                    ''
                                  )
                                }
                              ></img>
                              <div className='card-content'>
                                <Link
                                  className='card-content-title '
                                  to={{
                                    pathname: `/berita`,
                                    state: {
                                      post: post
                                    }
                                  }}
                                >
                                  {post && post.title.length > 70
                                    ? post.title.slice(0, 70) + '...'
                                    : post.title}
                                </Link>

                                <div className='card-content-date margin-top-10'>
                                  <FontIcon iconName='EventDate'></FontIcon>
                                  <label className='card-content-date-label'>
                                    {moment(post && post.publishedAt).format(
                                      'll'
                                    )}
                                  </label>
                                </div>
                                <div className='card-content-description'>
                                  {post &&
                                  post.description &&
                                  post.description.length > 70
                                    ? post.description.slice(0, 70) + '...'
                                    : post.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null
                      )
                    : null}
                </div>
                {errorMsg ? <div>{errorMsg}</div> : null}
              </div>
            </div>
          </>
        )}
      </PostList>
    );
  }
}

export default PostList;
