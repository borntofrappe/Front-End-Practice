// data describing the highest mountains on earth, by name, elevation and country(ies)
// https://en.wikipedia.org/wiki/List_of_highest_mountains_on_Earth

const data = [
  {
    name: 'Mount Everest',
    elevation: '8,848',
    country: ['Nepal', 'China'],
  },
  {
    name: 'K2',
    elevation: '8,611',
    country: ['Pakistan', 'China'],
  },
  {
    name: 'Kangchenjunga',
    elevation: '8,586',
    country: ['Nepal', 'India'],
  },
  {
    name: 'Lhotse',
    elevation: '8,516',
    country: ['Nepal', 'China'],
  },
  {
    name: 'Makalu',
    elevation: '8,485',
    country: ['Nepal', 'China'],
  },
  {
    name: 'Cho Oyu',
    elevation: '8,188',
    country: ['Nepal', 'China'],
  },
  {
    name: 'Dhaulagiri I',
    elevation: '8,167',
    country: ['Nepal'],
  },
  {
    name: 'Manaslu',
    elevation: '8,163',
    country: ['Nepal'],
  },
  {
    name: 'Nanga Parbat',
    elevation: '8,126',
    country: ['Pakistan'],
  },
  {
    name: 'Annapurna I',
    elevation: '8,091',
    country: ['Nepal'],
  },
  {
    name: 'Gasherbrum I',
    elevation: '8,080',
    country: ['Pakistan', 'China'],
  },
  {
    name: 'Broad Peak',
    elevation: '8,051',
    country: ['Pakistan', 'China'],
  },
  {
    name: 'Gasherbrum II',
    elevation: '8,035',
    country: ['Pakistan', 'China'],
  },
  {
    name: 'Shishapangma',
    elevation: '8,027',
    country: ['China'],
  },
  {
    name: 'Gyachung Kang',
    elevation: '7,952',
    country: ['Nepal', 'China'],
  },
  {
    name: 'Gasherbrum III',
    elevation: '7,946',
    country: ['Pakistan', 'China'],
  },
  {
    name: 'Annapurna II',
    elevation: '7,937',
    country: ['Nepal'],
  },
  {
    name: 'Gasherbrum IV',
    elevation: '7,932',
    country: ['Pakistan'],
  },
  {
    name: 'Himalchuli',
    elevation: '7,893',
    country: ['Nepal'],
  },
  {
    name: 'Distaghil Sar',
    elevation: '7,884',
    country: ['Pakistan'],
  },
  {
    name: 'Ngadi Chuli',
    elevation: '7,871',
    country: ['Nepal'],
  },
  {
    name: 'Nuptse',
    elevation: '7,864',
    country: ['Nepal'],
  },
  {
    name: 'Khunyang Chhish',
    elevation: '7,823',
    country: ['Pakistan'],
  },
  {
    name: 'Masherbrum',
    elevation: '7,821',
    country: ['Pakistan'],
  },
  {
    name: 'Nanda Devi',
    elevation: '7,816',
    country: ['India'],
  },
  {
    name: 'Chomo Lonzo',
    elevation: '7,804',
    country: ['China'],
  },
  {
    name: 'Batura Sar',
    elevation: '7,795',
    country: ['Pakistan'],
  },
  {
    name: 'Kanjut Sar',
    elevation: '7,790',
    country: ['Pakistan'],
  },
  {
    name: 'Rakaposhi',
    elevation: '7,788',
    country: ['Pakistan'],
  },
  {
    name: 'Namcha Barwa',
    elevation: '7,782',
    country: ['China'],
  },
  {
    name: 'Kamet',
    elevation: '7,756',
    country: ['India'],
  },
  {
    name: 'Dhaulagiri II',
    elevation: '7,751',
    country: ['Nepal'],
  },
  {
    name: 'Saltoro Kangri',
    elevation: '7,742',
    country: ['India', 'Pakistan'],
  },
  {
    name: 'Kumbhakarna',
    elevation: '7,711',
    country: ['Nepal'],
  },
  {
    name: 'Tirich Mir',
    elevation: '7,708',
    country: ['Pakistan'],
  },
  {
    name: 'Molamenqing',
    elevation: '7,703',
    country: ['China'],
  },
  {
    name: 'Gurla Mandhata',
    elevation: '7,694',
    country: ['China'],
  },
  {
    name: 'Saser Kangri I',
    elevation: '7,672',
    country: ['India'],
  },
  {
    name: 'Chogolisa',
    elevation: '7,665',
    country: ['Pakistan'],
  },
  {
    name: 'Dhaulagiri IV',
    elevation: '7,661',
    country: ['Nepal'],
  },
  {
    name: 'Kongur Tagh',
    elevation: '7,649',
    country: ['China'],
  },
  {
    name: 'Dhaulagiri V',
    elevation: '7,618',
    country: ['Nepal'],
  },
  {
    name: 'Shispare',
    elevation: '7,611',
    country: ['Pakistan'],
  },
  {
    name: 'Trivor',
    elevation: '7,577',
    country: ['Pakistan'],
  },
  {
    name: 'Gangkhar Puensum',
    elevation: '7,570',
    country: ['Bhutan', 'China'],
  },
  {
    name: 'Gongga Shan',
    elevation: '7,556',
    country: ['China'],
  },
  {
    name: 'Annapurna III',
    elevation: '7,555',
    country: ['Nepal'],
  },
  {
    name: 'Skyang Kangri',
    elevation: '7,545',
    country: ['Pakistan', 'China'],
  },
  {
    name: 'Changtse',
    elevation: '7,543',
    country: ['China'],
  },
  {
    name: 'Kula Kangri',
    elevation: '7,538',
    country: ['China', 'Bhutan'],
  },
  {
    name: 'Kongur Tiube',
    elevation: '7,530',
    country: ['China'],
  },
  {
    name: 'Mamostong Kangri',
    elevation: '7,516',
    country: ['India'],
  },
  {
    name: 'Saser Kangri II E',
    elevation: '7,513',
    country: ['India'],
  },
  {
    name: 'Muztagh Ata',
    elevation: '7,509',
    country: ['China'],
  },
  {
    name: 'Ismoil Somoni Peak',
    elevation: '7,495',
    country: ['Tajikistan'],
  },
  {
    name: 'Saser Kangri III',
    elevation: '7,495',
    country: ['India'],
  },
  {
    name: 'Noshaq',
    elevation: '7,492',
    country: ['Afghanistan', 'Pakistan'],
  },
  {
    name: 'Pumari Chhish',
    elevation: '7,492',
    country: ['Pakistan'],
  },
  {
    name: 'Passu Sar',
    elevation: '7,476',
    country: ['Pakistan'],
  },
  {
    name: 'Yukshin Gardan Sar',
    elevation: '7,469',
    country: ['Pakistan'],
  },
  {
    name: 'Teram Kangri I',
    elevation: '7,462',
    country: ['India', 'China'],
  },
  {
    name: 'Jongsong Peak',
    elevation: '7,462',
    country: ['India', 'China', 'Nepal'],
  },
  {
    name: 'Malubiting',
    elevation: '7,458',
    country: ['Pakistan'],
  },
  {
    name: 'Gangapurna',
    elevation: '7,455',
    country: ['Nepal'],
  },
  {
    name: 'Jengish Chokusu',
    elevation: '7,439',
    country: ['Kyrgyzstan', 'China'],
  },
  {
    name: 'Sunanda Devi',
    elevation: '7,434',
    country: ['India'],
  },
  {
    name: 'K12',
    elevation: '7,428',
    country: ['India', 'Pakistan'],
  },
  {
    name: 'Yangra',
    elevation: '7,422',
    country: ['Nepal', 'China'],
  },
  {
    name: 'Sia Kangri',
    elevation: '7,422',
    country: ['Pakistan', 'India', 'China'],
  },
  {
    name: 'Momhil Sar',
    elevation: '7,414',
    country: ['Pakistan'],
  },
  {
    name: 'Kabru N',
    elevation: '7,412',
    country: ['India', 'Nepal'],
  },
  {
    name: 'Skil Brum',
    elevation: '7,410',
    country: ['Pakistan'],
  },
  {
    name: 'Haramosh Peak',
    elevation: '7,409',
    country: ['Pakistan'],
  },
  {
    name: 'Istor-o-Nal',
    elevation: '7,403',
    country: ['Pakistan'],
  },
  {
    name: 'Ghent Kangri',
    elevation: '7,401',
    country: ['India', 'Pakistan'],
  },
  {
    name: 'Ultar',
    elevation: '7,388',
    country: ['Pakistan'],
  },
  {
    name: 'Rimo I',
    elevation: '7,385',
    country: ['India'],
  },
  {
    name: 'Churen Himal',
    elevation: '7,385',
    country: ['Nepal'],
  },
  {
    name: 'Teram Kangri III',
    elevation: '7,382',
    country: ['India', 'China'],
  },
  {
    name: 'Sherpi Kangri',
    elevation: '7,380',
    country: ['India', 'Pakistan'],
  },
  {
    name: 'Labuche Kang',
    elevation: '7,367',
    country: ['China'],
  },
  {
    name: 'Kirat Chuli',
    elevation: '7,362',
    country: ['India', 'Nepal'],
  },
  {
    name: 'Abi Gamin',
    elevation: '7,355',
    country: ['India', 'China'],
  },
  {
    name: 'Gimmigela',
    elevation: '7,350',
    country: ['India', 'Nepal'],
  },
  {
    name: 'Nangpai Gosum',
    elevation: '7,350',
    country: ['Nepal', 'China'],
  },
  {
    name: 'Saraghrar',
    elevation: '7,349',
    country: ['Pakistan'],
  },
  {
    name: 'Talung',
    elevation: '7,349',
    country: ['Nepal', 'India'],
  },
  {
    name: 'Jomolhari',
    elevation: '7,326',
    country: ['Bhutan', 'China'],
  },
  {
    name: 'Chamlang',
    elevation: '7,321',
    country: ['Nepal'],
  },
  {
    name: 'Chongtar',
    elevation: '7,315',
    country: ['China'],
  },
  {
    name: 'Baltoro Kangri',
    elevation: '7,312',
    country: ['Pakistan'],
  },
  {
    name: 'Siguang Ri',
    elevation: '7,309',
    country: ['China'],
  },
  {
    name: 'The Crown',
    elevation: '7,295',
    country: ['China'],
  },
  {
    name: 'Gyala Peri',
    elevation: '7,294',
    country: ['China'],
  },
  {
    name: 'Porong Ri',
    elevation: '7,292',
    country: ['China'],
  },
  {
    name: 'Baintha Brakk',
    elevation: '7,285',
    country: ['Pakistan'],
  },
  {
    name: 'Yutmaru Sar',
    elevation: '7,283',
    country: ['Pakistan'],
  },
  {
    name: 'K6',
    elevation: '7,282',
    country: ['Pakistan'],
  },
  {
    name: 'Kangpenqing',
    elevation: '7,281',
    country: ['China'],
  },
  {
    name: 'Muztagh Tower',
    elevation: '7,276',
    country: ['Pakistan', 'China'],
  },
  {
    name: 'Mana Peak',
    elevation: '7,272',
    country: ['India'],
  },
  {
    name: 'Dhaulagiri VI',
    elevation: '7,268',
    country: ['Nepal'],
  },
  {
    name: 'Diran',
    elevation: '7,266',
    country: ['Pakistan'],
  },
  {
    name: 'Labuche Kang III',
    elevation: '7,250',
    country: ['China'],
  },
  {
    name: 'Putha Hiunchuli',
    elevation: '7,246',
    country: ['Nepal'],
  },
  {
    name: 'Apsarasas Kangri',
    elevation: '7,245',
    country: ['India', 'China'],
  },
  {
    name: 'Mukut Parbat',
    elevation: '7,242',
    country: ['India', 'China'],
  },
  {
    name: 'Rimo III',
    elevation: '7,233',
    country: ['India'],
  },
  {
    name: 'Langtang Lirung',
    elevation: '7,227',
    country: ['Nepal'],
  },
  {
    name: 'Karjiang',
    elevation: '7,221',
    country: ['China'],
  },
  {
    name: 'Annapurna Dakshin',
    elevation: '7,219',
    country: ['Nepal'],
  },
  {
    name: 'Khartaphu',
    elevation: '7,213',
    country: ['China'],
  },
  {
    name: 'Tongshanjiabu',
    elevation: '7,207',
    country: ['Bhutan', 'China'],
  },
  {
    name: 'Malangutti Sar',
    elevation: '7,207',
    country: ['Pakistan'],
  },
  {
    name: 'Noijin Kangsang',
    elevation: '7,206',
    country: ['China'],
  },
  {
    name: 'Langtang Ri',
    elevation: '7,205',
    country: ['Nepal', 'China'],
  },
  {
    name: 'Kangphu Kang',
    elevation: '7,204',
    country: ['Bhutan', 'China'],
  },
  {
    name: 'Singhi Kangri',
    elevation: '7,202',
    country: ['India', 'China'],
  },
  {
    name: 'Lupghar Sar',
    elevation: '7,200',
    country: ['Pakistan'],
  },
];
