
export enum EMetaType {
  varEmpty = 0,
  varNull,
  varSmallint,
  varInteger,
  varSingle,
  varDouble,
  varCurrency,
  varDate,
  varOleStr,
  varDispatch,
  varError,
  varBoolean,
  varVariant,
  varUnknown,
  varDecimal,
  varUndef0F,
  varShortInt,
  varByte,
  varWord,
  varLongWord,
  varInt64,
  varUInt64,
  varRecord = 0x24,
  //   дополнительные типы данных поддерживаемые парсером
  var_i3,
  var_ui3,
  var_info,
  var_adr,
  var_i2_15b,
  var_ui2_15b,
  varRamSize, // word MB
  var_i2_10b,
  var_i2_14b,
  var_ui2_14b,
  var_ui2_kadr_psk4,
  var_ui2_kadr_all,
  var_ui2_8b,
  var_i2_14b_z_inv,
  var_i2_14b_z,
  var_inv_ui3,
  var_inv_ui3_ltr,
  var_inv_word,
  var_inv_i3,
  varChip,
  varSerial,   // серийный номер
  var_i2_15b_inv,
  var_array,
  var_i2_14b_GZ,
  varSSDSize, // Cardinal
  varSpeed, // BitMask Word
  var_long_adr,

  varString = 0x0100, // { Pascal string  256 } {not OLE compatible }
}

export enum EStdAttr {
  // совместимость с БД для XML проекта
  AT_CAPTION = 'Имя',
  AT_PRIORITY = 'Ptiority',
  AT_OBJ = 'ObjData',
  //   Атрибуты
  //   Основные ветви метаданных
  T_WRK = 'WRK',
  T_RAM = 'RAM',
  T_EEPROM = 'EEP',
  T_GLU = 'GLU',
  T_MTR = 'Метрология',
  AT_FILE_NAME = 'FILE_NAME',
  AT_FILE_CLC = 'FILE_NAME_CLC',
  //  свойства прибора
  AT_ADDR = 'ADDR',
  AT_CHIP = 'CHIP_INDEX',
  AT_INFO = 'INFO',
  AT_PSK_BYTE_ADDR = 'PSK_BYTE_ADDR',
  AT_SERIAL = 'SERIAL_NO',
  AT_SPEED = 'COMUNICATION_PROPERTY',   // BIT15:USB  BIT14:SSD BIT7:125Kbt BIT6:500Kbt
  AT_TIMEATT = 'TIME_ATT',
  AT_METROLOG = 'Metrolog',
  AT_DEVNAME = 'DevName',
  AT_DELAYDV = 'DELAY_DEVIDER',
  AT_WORKTIME = 'WORK_TIME_ENABLE',
  AT_DEV_ID = 'DEV_ID', // для проекта

  //  ветви метаданных
  AT_SIZE = 'SIZE',
  // добавка по глубине
  AT_ZND = 'ZND',
  //  дополнительные свойства (для метрологии, форматирования) модуля, данных
  AT_METR = 'METR',
  ME_ANGLE = 'ANGLE', // метрология угол
  // ME_MEDIAN = 'MEDIAN', // метрология медианна
  // если массив данных
  AT_ARRAY = 'ARRAY_SIZE', // число елементов не байт!!!

  // ветвь данные
  // общие атрибуты
  // пока нет AT_ZND AT_METR
  //  Ветви
  T_CLC = 'CLC', //  Ветвь рассчетные данные
  T_DEV = 'DEV', // Ветвь данных с устройства

  // атрибуты
  AT_INDEX = 'INDEX', // для DEV указатель в массиве сырых данных с устройства
  // данные по типу
  AT_TIP = 'TYPE',
  // данные извлеченные по AT_INDEX или рассчитанные или указатель на массив
  AT_VALUE = 'VALUE',
  // данные с форматированием TRR необязательные атрибуты
  //  AT_FMT   = 'VIEW_FMT', // точность после запятой
  AT_EU = 'EU',  // единицы
  AT_TITLE = 'TITLE', // единицы
  AT_RLO = 'RANGE_LO', // диапазон
  AT_RHI = 'RANGE_HI', // диапазон
  AT_DIGITS = 'DIGITS', // длинна
  AT_AQURICY = 'AQURICY', // тoчность
  AT_COLOR = 'COLOR', //
  AT_WIDTH = 'WIDTH', //
  AT_DASH = 'DASH', //
  // фильтры для ветвей T_WRK T_RAM таблиц БД по времени кадрам
  //  AT_DB_SELECT = 'DB_SELECT',

  // чтение памяти
  AT_RAMSIZE = 'RAM_SIZE',
  AT_SSD = 'SSD_SIZE',
  // PSK чтение памяти
  AT_RAMLP = 'RAM_LO_SPEED_PROTOCOL',
  AT_RAMHP = 'RAM_HI_SPEED_PROTOCOL',
  // PSK  протоколы
  AT_SP_HI = 'SP_HI_BYTE',
  AT_WRKP = 'FLOW_PROTOCOL',
  AT_FLOWINTERVAL = 'FLOW_TIMER_INTERVAL',

  // Атрибуты считанной памяти
  AT_START_TIME = 'START_TIME',
  AT_DELAY_TIME = 'DELAY_TIME',
  AT_KOEF_TIME = 'KOEF_TIME',
  AT_FROM_TIME = 'FROM_TIME',
  AT_TO_TIME = 'TO_TIME',
  AT_FROM_ADR = 'FROM_ADR',
  AT_TO_ADR = 'TO_ADR',
  AT_FROM_KADR = 'FROM_KADR',
  AT_TO_KADR = 'TO_KADR',
}
// Поддерживаемые данные прибора
// Формат (typ|{var_name{|meta}|0) type var_name: {value: number; readonly META?: string; readonly Type:typ; readonly index: number }
// Формат массива (arr=59|L|H|typ|{arr_name}|0) type arr_name: {value: number[HL]; const META=meta; const Type = typ; index: number}
export const STDTP = [
  {
    tip: EMetaType.varShortInt, attr: EStdAttr.AT_TIP, cname: 'int8_t', metalen: 'string', devlen: 1,
    sv: (v: number, d: Buffer, idx: number) => d.writeInt8(v, idx),
    gv: (d: Buffer, idx: number): number => d.readInt8(idx),
  },
  {
    tip: EMetaType.varByte, attr: EStdAttr.AT_TIP, cname: 'uint8_t', metalen: 'string', devlen: 1,
    sv: (v: number, d: Buffer, idx: number) => d.writeUInt8(v, idx),
    gv: (d: Buffer, idx: number): number => d.readUInt8(idx),
  },
  {
    tip: EMetaType.varSmallint, attr: EStdAttr.AT_TIP, cname: 'int16_t', metalen: 'string', devlen: 2,
    sv: (v: number, d: Buffer, idx: number) => d.writeInt16LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readInt16LE(idx),
  },
  {
    tip: EMetaType.varWord, attr: EStdAttr.AT_TIP, cname: 'uint16_t', metalen: 'string', devlen: 2,
    sv: (v: number, d: Buffer, idx: number) => d.writeUInt16LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readUInt16LE(idx),
  },
  {
    tip: EMetaType.varInteger, attr: EStdAttr.AT_TIP, cname: 'int32_t', metalen: 'string', devlen: 4,
    sv: (v: number, d: Buffer, idx: number) => d.writeInt32LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readInt32LE(idx),
  },
  {
    tip: EMetaType.varLongWord, attr: EStdAttr.AT_TIP, cname: 'uint32_t', metalen: 'string', devlen: 4,
    sv: (v: number, d: Buffer, idx: number) => d.writeUInt32LE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readUInt32LE(idx),
  },
  {
    tip: EMetaType.varSingle, attr: EStdAttr.AT_TIP, cname: 'float', metalen: 'string', devlen: 4,
    sv: (v: number, d: Buffer, idx: number) => d.writeFloatLE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readFloatLE(idx),
  },
  {
    tip: EMetaType.varDouble, attr: EStdAttr.AT_TIP, cname: 'double', metalen: 'string', devlen: 8,
    sv: (v: number, d: Buffer, idx: number) => d.writeDoubleLE(v, idx),
    gv: (d: Buffer, idx: number): number => d.readDoubleLE(idx),
  },
];

// Дополнительные атрибуты метаданных прибора
// Формат (typ|n) type const attrname: number = n;
// Формат (typ|nn) type const attrname: number = nn;
// Формат (typ|nnnn) type const attrname: number = nnnn;
// Формат (typ=39|{str}|0) type const attrname: string = str;
export const USRTP = [
  { tip: EMetaType.var_adr, attr: EStdAttr.AT_ADDR, cname: 'Adr', metalen: 1 },
  { tip: EMetaType.var_long_adr, attr: EStdAttr.AT_ADDR, cname: 'LongAdr', metalen: 4 },
  { tip: EMetaType.var_info, attr: EStdAttr.AT_INFO, cname: 'Info', metalen: 'string' },
  { tip: EMetaType.varChip, attr: EStdAttr.AT_CHIP, cname: 'Chip', metalen: 1 },
  { tip: EMetaType.varSerial, attr: EStdAttr.AT_SERIAL, cname: 'Serial', metalen: 2 },
  { tip: EMetaType.varRamSize, attr: EStdAttr.AT_RAMSIZE, cname: 'RamSize', metalen: 2 },
  { tip: EMetaType.varSSDSize, attr: EStdAttr.AT_SSD, cname: 'SSDSize', metalen: 4 },
  { tip: EMetaType.varSpeed, attr: EStdAttr.AT_SPEED, cname: 'MaskSpeed', metalen: 2 },
];

// CArray.Add<TChip>(Chips, Tchip.Create(1,  64, $34, 128, 'ATMega88',8));
// CArray.Add<TChip>(Chips, Tchip.Create(2, 128, $7C, 128, 'ATMega164',8));
// CArray.Add<TChip>(Chips, Tchip.Create(3, 128, $180, 1024, 'STM32F103CB',32,$08002000));
// CArray.Add<TChip>(Chips, Tchip.Create(4, 128, $7C, 256, 'ATMega664',8));
// CArray.Add<TChip>(Chips, Tchip.Create(5, 128, $400, 4096, 'STM32F401',32,$08004000));

// TChip = record
// Chip: Integer;
// Recs: Integer;
// InfoStart: Integer;
// Pages: Integer;
// Info: string;
// cbIndex: Integer;
// adr_sz: Integer;
// flash_begin: DWORD;

export const CHIPS = [
  { id: 1, size: 64,  pages: 128,  meta: 0x34,  name: 'ATMega88',     bits: 8,  flash: 0x0000 },
  { id: 2, size: 128, pages: 128,  meta: 0x7C,  name: 'ATMega164',    bits: 8,  flash: 0x0000 },
  { id: 3, size: 128, pages: 1024, meta: 0x180, name: 'STM32F103CB',  bits: 32, flash: 0x08002000 },
  { id: 4, size: 128, pages: 256,  meta: 0x7C,  name: 'ATMega664',    bits: 8,  flash: 0x0000 },
  { id: 5, size: 128, pages: 4096, meta: 0x400, name: 'STM32F401',    bits: 32, flash: 0x08004000 },
];
