# Catatan Week 2

> Tuliskan apapun yang kalian pelajari pada phase 2 week-2 di file ini.
>
> "Pemahaman yang baik berasal dari keinginan untuk terus belajar, dan catatan adalah langkah pertama menuju pengetahuan yang dalam."

>>>>>>>>>>>> W1d1 
#NT
nganggo jeneng kelas sing deskriptif ben gampang pemeliharaan kode.
Hindari gae inline CSS dan alok gawe maneh file eksternal CSS untuk memisahkan struktur dan gaya.
Box Model: bengampang bedakke. kuwi struktur:
" padding, border, margin, dan content."
Positioning: nentokke variabel utwo (el), seperti berikut:
relative, absolute, fixed, dan static.
Flexbox: Teknik sing modern lan utowo sing paling fleksibel dan ringkes.
Grid: Sistem tata letak dua dimensi yang memungkinkan pembagian halaman menjadi kolom dan baris yang teratur.

commit4kali(done)

<<<<<<<<<<<<< w2d2 >>>>>>>>>>>>>
#NT
babeljs.



tiap ada kasih keyprops
min dipasang 2 page
buat component caard

buat halaman dibuat di folder pages

kalo component2 aja seperti navbar formnya

strictmode => console.log "jiakalo meh nampilno"
toastify
sweetalert2

npm i sweetalert
// untuk check list server yg berjalan

$ pm2 list 

// kalau udah dapet idnya dari list, masukin idnya
$ pm2 delete <id>

// lalu jalankan kembali
$ pm2 start ecosystem.config.js


jangan lupa commit 4kali 
halaman trmasuk component
dan penamaan di component pascalcase
buat spa dan hrrs reactive
kalao params prefer use param
dan params itu objek harus dikasih id

pasang loader trmsuk sebuah function tiap mau akses routes yg didalam

langsung coba materi td pagi aja
dan bikin halaman halaman yang diminta
di website customer ada halaman list job, detail job 
di website cms ada table job, table company dsb
commit 4kali (done)
#<<<<<<<<< W1D3 >>>>>>>>>

public website catalog
glints list job detail dari job
kalibrr
contoh public website

cms site untuk adminn perusahaan 
nambahin job company delete job CRUD dan login register

commit 4kali

#W1D4

commit 4kali[]
Semangat coyyy
Yuk bisa yukkk
wargggsjkhadkjadadj






                                    USer(profile)


                                    job (Table UTAMA)

                                    COMPANY (Table Support)
   kjjkhjj

   fdgfdgdfgdfgdfgfddgfdg dfdsfdsfsdfdsfcbcbdgdfgfdgfdgfdfdddgdffhffgfdgdgdssdfsfzfsafsdfdadsa

   #W1D5

   TUTORIAL UPLOAD DI CLIENT @student-rmt-45 

untuk handle patch di client itu ada beberapa langkah yang harus kita lakukan

buat form dengan tipe input file
<form>
  <input type="file" name="imgUrl">
</form>


bikin handle onchange di inputnya, simpan gambarnya temporer di state aja dulu
// state
const [file, setFile] = useState(null)

// handle change input image
const handleChange = () => {
  const image = event.target.files[0] // ambil imagenya dari sini  
  setFile(image)
}

// jangan lupa return ya componentnya
...
<form>
  <input onChange={handleChange} type="file" name="imgUrl">
</form>
...


bikin handle untuk formnya, tapi karena formnya itu formdata, maka kita jadikan form data terlebih dahulu
// state
const [file, setFile] = useState(null)

// handle change input image
const handleChange = () => {
  const image = event.target.files[0] // ambil imagenya dari sini  
  setFile(image)
}

// handle untuk submit form
const handleSubmitForm = async (event) => {
  event.preventDefault()
  // ini hanya contoh, nanti jangan lupa pake try catch

  const formData = new FormData() // buat form data
  
  formData.append('imgUrl', file) // append ke formData
  // param ke 1 sesuaikan dengan field input di servernya, param ke 2 dari state "file"

  // axios
  const {data} = await axios({
    method: 'patch',
    url: *masukan url kamu*,
    headers: {
      Authorization: 'Bearer blablabla',
      "Content-Type": "multipart/form-data", // wajib menambahkan line ini pas nge axios
    }
  })

  // kesananya harusnya lanjut udah tau mau ngapain
}

// jangan lupa return ya componentnya
.........../.......
<form onSubmit={handleSubmitForm}>
  <input onChange={handleChange} type="file" name="imgUrl">
</form>
...
 const {data} = await axios({
    method: 'patch',
    url: *masukan url kamu*,
    data: formData, // ini yg baru
    headers: {
      Authorization: 'Bearer blablabla',
      "Content-Type": "multipart/form-data", // wajib menambahkan line ini pas nge axios
    }
})
dsadsadsadsadsadadsadsadtytrysadasdsahjhhjjgjghjhgjghj