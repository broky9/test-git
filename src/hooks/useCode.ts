import {ref} from 'vue'
import axios from 'axios';
export default function() {
    const imgSrc = ref('');

    const getCode = async () => {
        let codeReturn;
        codeReturn = await axios.get('http://shanhe.kim/api/wz/bing.php',{headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
        },params:{rand:true,info: false}});
        imgSrc.value = codeReturn.img
    }

    return { imgSrc, getCode }
}