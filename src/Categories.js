import React from 'react';
//we can take dynamic approach also for categories , coz if lit changes and new categories come then i will have to make new buttons

const Categories = ({categories,filterItems}) => {


  return (
    <div className='btn-container'>
{

categories.map((category,index)=>{
return (
<button type="button" className='filter-btn' 
key={index}
onClick={()=>filterItems(category)}
>

  {category}
</button>
)
})

}
      </div>
  )

}

/* <div className='btn-container'>
<button className='filter-btn'onClick={()=>
  filterItems('breakfast')}>Breakfast</button> &nbsp;
<button className='filter-btn'
onClick={()=>
  filterItems('all')}>All</button> &nbsp;

<button className='filter-btn'onClick={()=>
  filterItems('lunch')}>Lunch</button> &nbsp;
<button className='filter-btn'onClick={()=>
  filterItems('shakes')}>Shakes</button> &nbsp;
</div> */


  // )


export default Categories;
