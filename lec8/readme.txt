About Express
1->framework of node js 
node js ne server create krne ke liye http module dia hia 
server -> apke code se koi interect tbhi kr paega jb paka code khi run kr rha hoga 
server using contains apllication logic and databse (jo response krta haia)
client- jo server ko reacg kre (sendrequest)

ek applictaion age response kregi toh server , or request send kregi toh client
server can be created using http module(but have to write xomplex boiler plate code)

so to make work easy we have a framework caled Express
always must contain package.json file in folder (which contain all inf),created using (npm init)
-> install Express (npm install express)
-> express ko reuirre kroge
-> fir usko call kroge
-> uske upr app listen function chla skte ho or get function
-> node modules -contain code of dependencies
hava eto reuire express in server.js .. reuire se oackage ki jo index file(entry point) hogi usko run krega
port-> communication endpoint ;physical endpoints eg USB, (jisy hum connection kar ske)
//1500 se upr ya 1200 se upr ke ports ap use kr skte ho uske niche ke pre allocated hai 

node js architecture is evetn driven (sari cheeze event driven hai) ye call back tb chlega jb app listen krlega 
nod ejs is event driven async non-blocking 


client serever architecture
client and server both are application running on any port (can be diff, same deped on architecture follow)
joh re

//if server was closed and re made on that port it will not display and after /*
can also send json data from srver app.get se

  res.json({
  name:"Nitesh,
  address:"delhi"
  isLogin:true
  })
*/
path perimeter/path variable
two ways to read data from path ->
1)query parameter-> isme endpoint mein nhi llikha ata hai, or data req.query mein ata hai in path send using by putting ? key=value
ye client side se jat hai using quetsion mark and multiple things can be send using  & 
agr apne send krte hue bich mein spec hua toh bhi vo pura uthaega and that space covered by %
2)params   uske path ke agy : se ek variable bnate ho eg  /users/:id   id is variable ap kuch bhi bhejd skte ho
sare req ki inf request mein milegi vo aegi req.params mein(ye object hota hia isme se id   .id krke acces krege)
path ke and valriable colon lgake bnayte hai uko bolte hia params or sari inf req.parmas s ekr skte hai
variable ke thorugh id mein store hoga, ye path mei likh ke at hai


jab bhi url se req. bhete ho vo as a get se jati hai
url se kbhi  post nhi jati
aanchor tag se 