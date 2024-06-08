import SideberRow from "../Hook/SideberRow";
// import side from "@"
 
function Sideber( ) {
    return (
        <div className=" col-span-3 border-4 bg-black text-indigo-50"> 
            <SideberRow Icon="ho"   title="Home" />
            <SideberRow Icon="fo" title="Trending" />
            <SideberRow Icon="he" title="Subsciption" />
            <hr/>
            <SideberRow Icon="he" title="Subsciption" />
        </div>
    );
}
 
 
export default Sideber; 