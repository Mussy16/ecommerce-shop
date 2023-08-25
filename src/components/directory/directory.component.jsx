import CategoryIterm from "../category-iterm/category.components";
import './directory.styles.scss';

const Directory = ({categories})=>{
    return(
     <div className="categories-container">
      {categories.map((category)=>( 
     <CategoryIterm key={category.id} category={category}/>
      ))}
    </div>
    )
}
export default Directory;