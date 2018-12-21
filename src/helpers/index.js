export function randomString(length = 8 ) {
    const characters = 'AaBbCcDdEeFGgHhIiJjKkLlMmNnOoPpQqRRSsTtUUVvWwXXYYZz';
    let randomStr = '';
     for (let i = 0; i <length; i++) {
         const randomIndex = Math.floor(Math.random() * characters.length);

         randomStr += characters[randomIndex];
     }
     return randomStr;


}