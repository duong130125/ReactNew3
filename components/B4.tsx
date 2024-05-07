import React, {useState} from 'react'

export default function B4() {
    const provincesAndCities: string[] = [
        'Hà Nội',
        'Hồ Chí Minh',
        'Đà Nẵng',
        'Hải Phòng',
        'Cần Thơ',
        'Huế',
        'Nha Trang',
        'Vũng Tàu',
        'Đà Lạt',
        'Hạ Long',
        'Phú Quốc',
        'Nghệ An',
        'Thanh Hóa',
        'Hà Tĩnh',
      ];
    
      const [selectedProvince, setSelectedProvince] = useState<string>('');
    
      const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        setSelectedProvince(event.target.value);
      };
  return (
    <>
    <h2>Tỉnh/Thành phố: {selectedProvince}</h2>
    <select value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">Chọn tỉnh/thành phố</option>
        
        {provincesAndCities.map((province, index) => (
          <option key={index} value={province}>
            {province}
          </option>
        ))}
        </select>
    </>
  )
}
