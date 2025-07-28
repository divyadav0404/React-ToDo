
import "./Product.css";


function Product({title,price,features}){
    let styles = {backgroundColor : "black" };
        return (
         <div className = "Product" style ={styles}>
            <h3> {title} </h3>
            <h5>price : {price}</h5>
        </div>
    );
} 
export default Product 
/* "LogicTech Mx Master"
Apple pencil 2nd Gen
Petronics Toad 23 ,,,
// 12,495 , 11,400, 8,999, 9199 , 9032,,,
 
idx(0)
idx(1)
idx(2) we have wwriteen onsubmit event and not on lcikc 
idx(3) 
also we can use the description in the same manner w euse the 
other things , like {} using curly braces.....
actually component triggweing is done by setCount <method styleName={}></method>

 useState() is a react hook that lets you
 use
*/