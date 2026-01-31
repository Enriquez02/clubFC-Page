// to see more in
const MoreInformation = ({ onMoreInfo }) => {


  return (

  <div className="absolute bottom-0 mb-2 text-white font-medium ">
        <button className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-blue-300 hover:from-blue-300 hover:to-red-500 transition-all duration-800"
        // Se envia la info de  handleMoreInfo
        onClick={onMoreInfo}>
            + See more
         </button>
</div>
       
  );
}

export default MoreInformation