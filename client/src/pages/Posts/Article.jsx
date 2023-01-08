import React from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';

const Article = () => {
  return (
    <div className='article'>
      <div className="content">
        
        <img src="https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2021/04/bojack-1.jpg?fit=2400%2C1600&ssl=1" alt="" />
        <div className="user">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L1QCer3D9wTWXkqIVZ076NAux-h64jSiWw&usqp=CAU" alt="" />
          <div className="info">
            <span>Caue</span>
            <p>posted today</p>
          </div>
          <div className="edit" >
          <Link className='link' to={`/write?edit=1`}><AiFillEdit title='Edit' className='editIcon'/></Link>
            <Link className='link'><AiOutlineDelete title='Delete' className='removeIcon'/></Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repudiandae quia! Laudantium, voluptatibus dolore mollitia magnam, distinctio, tempora sunt rerum dolores itaque accusamus nostrum impedit! Nemo fuga maxime a ducimus!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aut, maiores animi perspiciatis iste veniam, perferendis nam ipsum saepe eveniet dignissimos sunt, adipisci voluptatem laboriosam consequuntur dolor! Voluptate, dignissimos facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit exercitationem libero necessitatibus modi, magnam porro illo! Officiis, dicta facere eius veniam optio pariatur! Odit alias repellendus distinctio hic minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis sint nulla reiciendis doloribus inventore hic facere iste ea, recusandae totam dolores minima minus quaerat sapiente magnam sit odio ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus animi ratione id ea sequi, consequuntur a qui fugit nisi aliquid deleniti magni illum optio culpa. Unde repudiandae fugit corporis cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae aut, maiores animi perspiciatis iste veniam, perferendis nam ipsum saepe eveniet dignissimos sunt, adipisci voluptatem laboriosam consequuntur dolor! Voluptate, dignissimos facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit exercitationem libero necessitatibus modi, magnam porro illo! Officiis, dicta facere eius veniam optio pariatur! Odit alias repellendus distinctio hic minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis sint nulla reiciendis doloribus inventore hic facere iste ea, recusandae totam dolores minima minus quaerat sapiente magnam sit odio ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus animi ratione id ea sequi, consequuntur a qui fugit nisi aliquid deleniti magni illum optio culpa. Unde repudiandae fugit corporis cumque. </p>
      
      </div>
      
      <div className="menu-section">
      <h1>Other posts you might like</h1>
      <Menu />
      </div>
    </div>
  )
}

export default Article;