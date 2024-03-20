# Catatan Week 1

> Tuliskan apapun yang kalian pelajari pada phase 2 week-1 di file ini.
>
> "Pemahaman yang baik berasal dari keinginan untuk terus belajar, dan catatan adalah langkah pertama menuju pengetahuan yang dalam."
>>>>> W1 <<<<<< 
   buatlah positive case gagal validasi
   buat negatif case
   BEARER TOKEN TIDAK BISADITEMPLATE STANDART DI APK WEB

   QREAR
   BASIC
   API KEY

   YG GUNAKAN TIPE BEARER

   kesaLAHAN AUTHEN 401

   AUTHORIZATION 403

   publicais(github)
   daftar api lokal indonesia(github)

   role 3
   default staff
   job creator
   job seeker
aws FREE 1TAHUN

GCP FREE JIKA FIRST ACCOUNT

BUAT DOMAIN PERTAHUN 
.COM MAHAL
.MAIN.ID MURAH

patch update one field of data

TIDAK RENDER LAGI UNTUK KALI INI
R

REQ BODY REQ PARAM( CLIENT ERROR)



jika method sama tidak ngaruh kalau method nya sama
harus sama method nya ngaruh 

KESALAHAN DARI SERVER(5XSERVER)

tidak boleh mengirimkan res lebih dari satu harus diberi (else/ return in syntax if


buat api dock

#APP API DOCS

## ENDPOINTS
'GET'/MOVIES
'POST'/MOVIES
'GET'/MOVIES/:ID
'DELETE'/,MOVIES/:ID
'PUT'/MOVIES/:ID

##'GET' BRANCH/MOVIES/:ID

THIS ENDPOINT IS USED to get ALL DATA

### REQUEST
-params

-BODY

```JSON
{
"TITLE": <STRING>
"IsNowShowing": <boolean>
"RATING": <FLOAT>
"DURATION": <INTEGER>
}

### RESPONSE 

_200-OK_

-BODY
```JSON
[
{
}
]
``

(Many to Manny)
user 1 to many ke tabel utama 
support 1 tomany ke tabel utama



unique :true(boolean)

alghoritm 256 jwt Web



FLOW LOGIN:
- AKAN CHECK EMAIL & PASSWORDNYA  ADA / TIDAK
- CHECK KE DB EMAILNY TERDAFTAR ATAU TIDAK
-CHECK PASSWORD YG ADA DI DB BENER ATAU ENGGA
- GENERATE TOKEN

uxdf /login

key login

null isNAN

notNull
notEmpty

buat errHandler
live code 1
enpoint 8
testing kagak nyesuain running testing aja point dari testing menyesuaikan
testing udah di bikinin
release ada 7/8
ikutin API docs req body
pas jalanin
interuksin berhasil atau gak 
simulasi livecode1

livecode 2
release lebih sedikit ngerjanin FE BE udah dibikinin
livecode 3
gabungan FE dan BE materinya

ngikutin API docs aja live code server
penamaan pads 
codinganmu harus sama API docs / dokumentasi
hati hati node modules
.env hati"

hati hati dengan crudentials

copy your password
databasenya supabase.com
project => setting database => connection string => lalu copy link
copy link connection string "postgresql" dan masukkan ke "[YOURNAME]"


ubah setting di config.json
"production"= use_env_variable = DATABASE_URL
masukkan ke .env 
set tambah dotenv

bukak AWS.com 
di button "services" lalu cari EC2
launch instances
beri name(45_server)
pilih Ubuntu
pilih yg free tier (versi 20/22)64bit 
instance type "64-bit"
buat key pair(login)
register create key pair(45-fsjs) by default gausah diganti
network setting allow https traffic ctg semua ketiganya
dan pilih server terdekata(singapore)
launch instance
masih state pending(kalo sudah ada berjalan)tunggu saja sampe ada notif running
setelah create instance
running lalu connect
connect lewat ssh client jika ingin lewat terminal
boleh langsung connect

switch ke cmd "sudosu"
install node js 

>>>>>>>>>>>>> command <<<<<<<<<<<<<
check command "node -v" lewat ubuntu
check npm -v
check git -v

node js ver terserah ngikut dicomputer(18)

bikin folder baru 


.gitignore 
nodemodules
.env

env JWT_Secret= secret123

clone repo

DISETIING 
create new personal acces di github
kolom repo aja
centang semua GAPAPA
JANGAN LUPA SAFE github pat(alert 1time only)==sbg PENGGANTI PASSWORD
lalu clone ke cmd
password emang ga keliatan (feeling aja) 

npm i pm2 -g (di cmd global aws)
pm2 init simple (cmd aws)

janganlupa !!! pindah ke PORT 80

// untuk check list server yg berjalan

$ pm2 list 

// kalau udah dapet idnya dari list, masukin idnya
$ pm2 delete <id>

// lalu jalankan kembali
$ pm2 start ecosystem.config.js