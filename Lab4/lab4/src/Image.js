import {useState, useEffect} from "react";
import $ from "jquery";
import {Button} from 'react-bootstrap'
import './App.css';

export function Image(){
    const [data, setData] = useState(null);
    const onButtonClick = () => {
        $.ajax({
            type: "GET",
            url: "https://random.dog/woof.json?ref=apilist.fun",
            success: function(data){
                $('#space_image').attr('src', data.url);
            }
        });
    }
    return (
        <div className="flex-div margin-bottom">
            <Button variant="primary" type="submit" onClick={onButtonClick}>Get image</Button>
            <img className="avatar" id="space_image" alt="random picture"/>
        </div>
    )
}