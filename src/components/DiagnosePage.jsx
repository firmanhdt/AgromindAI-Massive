import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function DiagnosePage() {
  const [imageSrc, setImageSrc] = useState("");
  const imagePreviewRef = useRef(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState(Array(175).fill(false)); // State untuk menyimpan status checkbox
  const navigate = useNavigate();

  const symptoms = [
    'abses',
    'ambing bengkak',
    'ambruk',
    'anemia',
    'anestrus',
    'anorexia',
    'atau luka yang sulit sembuh',
    'batuk',
    'bau busuk yang tidak sedap dari luka atau area terinfeksi',
    'bau tidak sedap dari perdarahan vagina (baunya bisa menjadi busuk)',
    'berat badan turun secara signifikan',
    'bersisik',
    'borok perkulitan',
    'bulu kusam',
    'bulu rontok',
    'buta',
    'dan keriput',
    'darah dalam tinja (terkadang)',
    'daun telinga keropeng',
    'dehidrasi',
    'demam',
    'diare',
    'durasi gejala biasanya 3-4 hari',
    'gangguan otot',
    'gangguan pada organ tubuh',
    'gangguan pencernaan',
    'gangguan pencernaan seperti diare atau sembelit',
    'gangguan penglihatan',
    'gangguan pertumbuhan pada anak hewan',
    'gangguan pertumbuhan pada anak-anak',
    'gangguan reproduksi',
    'gangguan sistem kekebalan tubuh',
    'gangguan sistem saraf',
    'gangguan tulang',
    'gangguan umum dalam perilaku atau kesehatan',
    'gatal',
    'gatal atau terasa seperti ada benda asing di mata',
    'gejala flu',
    'gelisah',
    'gemetar',
    'gusi yang bengkak',
    'haid tidak teratur',
    'hati atau ginjal',
    'hernia abdominalis',
    'hernia umbilicalis',
    'hilangnya bulu atau rambut pada area yang terinfeksi',
    'janin yang terlilit tali pusar',
    'kaku pada otot-otot tubuh',
    'kawin berulang',
    'kebingungan',
    'kegagalan hewan untuk makan atau minum',
    'kegagalan organ tertentu karena kekurangan nutrisi tertentu',
    'keguguran',
    'keguguran muda',
    'keguguran pada betina',
    'kehilangan nafsu makan',
    'kejang',
    'kekukurusan',
    'kekurusan',
    'kelainan kulit',
    'kelainan mata',
    'kelainan mulut',
    'kelelahan yang kronis',
    'kelesuan',
    'kelopak mata melekat saat bangun tidur (terutama pada konjungtivitis bakteri)',
    'keluarnya cairan atau darah dalam jumlah yang tidak normal dari vulva',
    'keluarnya sekresi',
    'keluarnya sekresi atau mata berair',
    'kemerahan',
    'kemungkinan terjadinya kejang',
    'kenaikan suhu tubuh (demam)',
    'kepala atau anggota badan janin terlihat tidak normal atau terdistorsi',
    'kerontokan bulu',
    'kerontokan rambut',
    'kesadaran menurun',
    'kesulitan berdiri',
    'kesulitan bergerak',
    'kesulitan bergerak atau berdiri',
    'kesulitan bernapas',
    'kesulitan dalam perkawinan',
    'kesulitan dalam proses persalinan',
    'kesulitan kencing',
    'keterlambatan dalam pengosongan perut',
    'keterlambatan dalam proses persalinan',
    'kornea mata keruh',
    'kram perut atau nyeri perut',
    'kualitas bulu atau kulit yang buruk',
    'kulit kering',
    'kulit kering dan bersisik',
    'kurangnya urin',
    'lahir mati',
    'lahir normal',
    'lama waktu persalinan yang tidak normal',
    'lelah',
    'lemah',
    'lemas',
    'liur berdarah',
    'liur berlebihan',
    'luka berdarah',
    'luka penis',
    'masalah gigi dan gusi',
    'masalah kulit seperti kering',
    'masalah pada perkembangan otak pada anak-anak',
    'masalah pernapasan',
    'masalah reproduksi pada wanita',
    'mata berair',
    'mata berdarah',
    'mata cekung',
    'mata iritasi',
    'mata merah',
    'mata terasa kering atau terasa pasir di mata',
    'mencret',
    'mengedipkan mata lebih sering dari biasanya',
    'menggaruk atau menggosok bagian tubuh tertentu',
    'mual',
    'mulut kering',
    'mungkin terjadi bisingan pada rongga dada atau pernapasan yang cepat',
    'muntah',
    'nyeri atau kram perut bagian bawah',
    'patah tulang kaki',
    'pembengkakan pada area terinfeksi',
    'pembengkakan pada kelopak mata',
    'pembengkakan pada sendi-sendi kaki',
    'pembentukan benjolan atau lepuh pada kulit',
    'pendarahan atau keluarnya cairan dari vulva',
    'pengeluaran nanah dari mata',
    'penglihatan kabur',
    'penurunan berat badan',
    'penurunan berat badan yang signifikan',
    'penurunan produksi susu pada sapi perah',
    'penurunan suhu tubuh setelah demam',
    'peradangan kulit',
    'perasaan penuh atau tertekan di perut bagian bawah',
    'perdarahan vagina yang berkepanjangan setelah persalinan',
    'perilaku gelisah atau gatal',
    'perkulitan',
    'pernapasan cepat',
    'perubahan perilaku',
    'perut kembung',
    'perut yang membesar secara tiba-tiba',
    'perut yang membuncit',
    'pilek atau sakit tenggorokan',
    'pincang',
    'posisi atau presentasi janin yang tidak benar (misalnya kepala tersendat)',
    'produksi air liur meningkat',
    'produksi lendir atau nanah pada mata (terutama jika infeksi bakteri)',
    'produksi ludah berlebihan',
    'prolaps anus',
    'radang mata',
    'radang telinga',
    'rahang bawah bengkak',
    'rahim bernanah',
    'rambut kering',
    'rambut mudah rontok',
    'rasa nyeri atau ketidaknyamanan di mata',
    'rasa perih atau sakit di mata',
    'retensi placenta',
    'sakit otot',
    'sakit sendi',
    'sapi kesulitan untuk melahirkan',
    'sapi menunjukkan tanda-tanda kesakitan yang tidak biasa',
    'sapi merintih',
    'sapi tampak tidak nyaman',
    'sekresi cairan atau nanah dari area terinfeksi',
    'sembelit',
    'sempoyongan',
    'sensasi panas di mata',
    'sensitivitas terhadap cahaya (fotofobia)',
    'sering mengunyah atau menggerogoti benda-benda di sekitarnya',
    'suara perut yang berbunyi-bunyi',
    'suhu tubuh yang meningkat',
    'tanda lain',
    'terjadi kejang-kejang',
    'tidak sakit',
    'tremor'
    ]

     // Fungsi untuk menangani checkbox gejala
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedSymptoms((prev) =>
      prev.includes(value)
        ? prev.filter((symptom) => symptom !== value)
        : [...prev, value]
    );
  };

  // Fungsi untuk mengirim data ke backend
  const handleDiagnose = async () => {
    if (selectedSymptoms.length === 0 && !imageSrc) {
      alert("Pilih minimal satu gejala atau upload foto untuk mendiagnosa.");
      return;
    }

    try {
      let result;

      // If there's an image, send it for prediction
      if (imageSrc) {
        // Convert base64 image to blob
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        
        const formData = new FormData();
        formData.append('image', blob);

        const imageResponse = await fetch('https://app-predict-image.1ongwfft5soj.us-south.codeengine.appdomain.cloud/imagePrediction', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
          }
        });

        if (!imageResponse.ok) {
          throw new Error('Image prediction failed');
        }

        const imageResult = await imageResponse.json();
        result = imageResult.Penyakit;
      }

      // If there are symptoms selected, send them for prediction
      if (selectedSymptoms.length > 0) {
        // Create array of 175 elements with 0s and 1s
        const symptomValues = Array(175).fill(0);
        selectedSymptoms.forEach(symptom => {
          const index = symptoms.indexOf(symptom);
          if (index !== -1) {
            symptomValues[index] = 1;
          }
        });
        const symptomsResponse = await fetch('https://app-predict-image.1ongwfft5soj.us-south.codeengine.appdomain.cloud/diseasePrediction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'inputGejala': symptomValues }),
        });

        if (!symptomsResponse.ok) {
          throw new Error('Symptoms prediction failed');
        }

        const symptomsResult = await symptomsResponse.json();
        result = symptomsResult.Penyakit;
      }

      // Navigate to results page with the prediction
      navigate('/hasil', { 
        state: { 
          diagnosis: result, 
          symptoms: selectedSymptoms,
          image: imageSrc 
        } 
      });

    } catch (error) {
      console.error('Error during prediction:', error);
      alert('Terjadi kesalahan saat melakukan prediksi. Silakan coba lagi.');
    }
  };

  // Fungsi untuk menangani upload gambar
  const loadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result); // Menyimpan URL gambar ke state
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="bg-orange-50 rounded-lg p-8 max-w-3xl mx-auto text-center shadow-lg relative">
        <div className="absolute top-2 left-2 text-red-500 text-xl">•</div>
        <div className="absolute top-4 left-10 text-blue-400 text-xs">•</div>
        <div className="absolute bottom-3 right-4 text-purple-400 text-xl">&#x21BA;</div>
        <div className="absolute bottom-6 left-6 text-yellow-400 text-xl">&#x21BB;</div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Diagnosa Penyakit Ternak Anda Sekarang</h2>
        <p className="text-gray-600">Fitur diagnosa ini akan membantu anda dalam mendiagnosa penyakit pada sapi anda</p>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Diagnosa Penyakit Sapimu</h2>
          <p className="text-gray-600 mb-6">
            Upload Foto sapi mu di posisi samping yang mengalami penyakit lalu pilih gejala
          </p>

          {/* Upload Foto Section */}
          <div className="mb-6 flex justify-center">
            <label htmlFor="imageUpload" className="cursor-pointer">
              <div className="w-48 h-48 bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
                {/* Pratinjau gambar */}
                {imageSrc ? (
                  <img
                    ref={imagePreviewRef}
                    src={imageSrc}
                    alt="Upload Foto"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <svg
                    id="uploadIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4V12m0 0v8m0-8H4m8 0h8"
                    />
                  </svg>
                )}
              </div>
            </label>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={loadImage}
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-[#362B0E] text-white py-2 px-4 rounded hover:bg-[#1f1808]">
              Upload Foto
            </button>
          </div>
        </div>
      </div>

    <div class="flex justify-center items-center bg-gray-100">
    <div className="bg-yellow-100 p-6 rounded-lg w-full">
    <h2 className="text-center font-semibold text-lg mb-4">Diagnosa</h2>
    <div className="overflow-x-auto"> {/* Enable horizontal scrolling */}
        <div className="grid grid-cols-5 gap-4 mb-4 text-sm"> {/* Adjust the number of columns */}
            {symptoms.map((symptom, index) => (
                <label key={index} className="flex items-center font-semibold">
                    <input
                        type="checkbox"
                        value={symptom}
                        className="mr-2"
                        onChange={handleCheckboxChange}
                    />
                    {symptom}
                </label>
            ))}
        </div>
    </div>
    <div className="flex justify-center mt-6">
        <button
            onClick={handleDiagnose}
            className="bg-[#362B0E] text-white py-2 px-4 rounded hover:bg-[#1f1808]"
        >
            Kirim Diagnosa
        </button>
    </div>
</div>
</div>
    </>
  );
}

export default DiagnosePage;
