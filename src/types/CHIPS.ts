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
  { id: 1, size: 64, pages: 128, meta: 0x34, name: 'ATMega88', bits: 8, flash: 0x0000 },
  { id: 2, size: 128, pages: 128, meta: 0x7C, name: 'ATMega164', bits: 8, flash: 0x0000 },
  { id: 3, size: 128, pages: 1024, meta: 0x180, name: 'STM32F103CB', bits: 32, flash: 0x08002000 },
  { id: 4, size: 128, pages: 256, meta: 0x7C, name: 'ATMega664', bits: 8, flash: 0x0000 },
  { id: 5, size: 128, pages: 4096, meta: 0x400, name: 'STM32F401', bits: 32, flash: 0x08004000 },
];
