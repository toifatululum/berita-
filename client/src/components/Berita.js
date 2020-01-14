import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Styled from 'styled-components';
export default class Berita extends Component {
  render() {
    const { post } = this.props.location.state;
    const Berita = Styled.section`
      .card{
        background-color:white;
        width:100%;
        margin-top:60px;
        img{
          width:100%
        }
        &-content{
          padding:30px;
        }
      }
    `;
    console.log(post);
    return (
      <Berita>
        <Navbar />
        <div className='container'>
          <div className='gridku'>
            <div className='ukuran-md-2'></div>
            <div className='ukuran-md-8'>
              <div className='card'>
                <img alt='img' src={post.urlToImage}></img>
                <div className='card-content'>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                </div>
              </div>
            </div>
            <div className='ukuran-md-2'></div>
          </div>
        </div>
      </Berita>
    );
  }
}
