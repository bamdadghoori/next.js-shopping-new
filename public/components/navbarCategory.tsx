

const NavbarCategory=({category}:{category:any})=>{
    return(
        <>
        <li className="dropdown position-static">
        <img className="category-img" src={category.imgUrl}/>
            <a href="shop-left-sidebar-col-3.html">
        
            {category.categoryTitle}
        {category.subCategories && ( <i className="ecicon eci-angle-left"></i>)}
       
        </a>
        {
            category.subCategories && (
                <>
                <ul className="sub-menu sub-menu-child">
                    {
                        category.subCategories.map((el:any,i:number)=>{
                           return(
                           
                           <li key={i}><a href="product-left-sidebar.html">{el}</a></li>
                           )
                        })
                    }
                                                
                                            </ul>
                </>
            )
        }
        
                                              </li>
        </>
    )
}
export default NavbarCategory;