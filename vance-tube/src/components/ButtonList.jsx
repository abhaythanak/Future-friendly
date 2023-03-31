import Button from "./Buttons";


export default function ButtonList(params) {
   
    //const List = ["all","Live","gaming"] do maping for cleaner code 
   
    return(
        <div className="flex justify-evenly ">
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Songs"/>
            <Button name="Live"/>
            <Button name="Soccer"/>
            <Button name="Cricket"/>
            <Button name="Cooking"/>
            <Button name="Valentine"/>
            <Button name="News"/>
            <Button name="Comedy"/>

        </div>
    )
};
