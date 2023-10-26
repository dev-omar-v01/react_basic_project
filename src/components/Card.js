

const todoTile = "Call  this is a title description";
function Card(props){
  const {titleText, descText} =props;
  return <div className='card'>
            <h3 className='cardTile'>{titleText}</h3>  
            <h3 className='cardDesc'>{descText}</h3>  
            <h3 className='cardFooter'>{todoTile}</h3>  
          </div>
}
export default Card;