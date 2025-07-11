// This service simulates fetching free classroom data
// In a web app, this could connect to a backend API or Firebase

// Mock data for rooms based on Sharda University campus
const mockRooms = [
  // Block 1 rooms
  {
    id: 1,
    roomNumber: '104',
    block: '1',
    floor: 'First'
  },
  {
    id: 2,
    roomNumber: '107',
    block: '1',
    floor: 'First'
  },
  {
    id: 3,
    roomNumber: '117',
    block: '1',
    floor: 'First'
  },
  {
    id: 4,
    roomNumber: '204',
    block: '1',
    floor: 'Second'
  },
  {
    id: 5,
    roomNumber: '205',
    block: '1',
    floor: 'Second'
  },
  {
    id: 6,
    roomNumber: '207',
    block: '1',
    floor: 'Second'
  },
  {
    id: 7,
    roomNumber: '211B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 8,
    roomNumber: '214A',
    block: '1',
    floor: 'Second'
  },
  {
    id: 9,
    roomNumber: '217',
    block: '1',
    floor: 'Second'
  },
  // Block 2 rooms
  {
    id: 10,
    roomNumber: '206',
    block: '2',
    floor: 'Second'
  },
  {
    id: 11,
    roomNumber: '207',
    block: '2',
    floor: 'Second'
  },
  // Block 1 room (previously incorrectly listed as Block 5)
  {
    id: 12,
    roomNumber: '502',
    block: '1',
    floor: 'Fifth'
  },
  {
    id: 13,
    roomNumber: '010A',
    block: '1',
    floor: 'Ground'
  },
  {
    id: 14,
    roomNumber: '211C',
    block: '1',
    floor: 'Second'
  },
  // Additional rooms from B.Tech CSE IV - B timetable
  {
    id: 15,
    roomNumber: '105',
    block: '1',
    floor: 'First'
  },
  {
    id: 16,
    roomNumber: '106',
    block: '1',
    floor: 'First'
  },
  {
    id: 17,
    roomNumber: '109',
    block: '1',
    floor: 'First'
  },
  {
    id: 18,
    roomNumber: '206',
    block: '1',
    floor: 'Second'
  },
  {
    id: 19,
    roomNumber: '304',
    block: '1',
    floor: 'Third'
  },
  {
    id: 20,
    roomNumber: '313B',
    block: '1',
    floor: 'Third'
  },
  // Block 3 room
  {
    id: 21,
    roomNumber: '211A',
    block: '3',
    floor: 'Second'
  },
  // Additional rooms from B.Tech CSE IV - C timetable
  {
    id: 22,
    roomNumber: '106',
    block: '1',
    floor: 'First'
  },
  {
    id: 23,
    roomNumber: '107',
    block: '1',
    floor: 'First'
  },
  {
    id: 24,
    roomNumber: '109',
    block: '1',
    floor: 'First'
  },
  {
    id: 25,
    roomNumber: '211B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 26,
    roomNumber: '211C',
    block: '1',
    floor: 'Second'
  },
  {
    id: 27,
    roomNumber: '214A',
    block: '1',
    floor: 'Second'
  },
  {
    id: 28,
    roomNumber: '302C',
    block: '1',
    floor: 'Third'
  },
  {
    id: 29,
    roomNumber: 'RMB02',
    block: '4',
    floor: 'Ground'
  },
  // Additional rooms from B.Tech CSE IV - D timetable
  {
    id: 30,
    roomNumber: '118',
    block: '1',
    floor: 'First'
  },
  {
    id: 31,
    roomNumber: '205',
    block: '1',
    floor: 'Second'
  },
  {
    id: 32,
    roomNumber: '206',
    block: '1',
    floor: 'Second'
  },
  {
    id: 33,
    roomNumber: '214A',
    block: '1',
    floor: 'Second'
  },
  {
    id: 34,
    roomNumber: '117',
    block: '1',
    floor: 'First'
  },
  {
    id: 35,
    roomNumber: '010A',
    block: '1',
    floor: 'Ground'
  },
  {
    id: 36,
    roomNumber: '302C',
    block: '1',
    floor: 'Third'
  },
  {
    id: 37,
    roomNumber: '710A',
    block: '4',
    floor: 'Seventh'
  },
  // Additional rooms from B.Tech CSE IV - E timetable
  {
    id: 38,
    roomNumber: '108',
    block: '1',
    floor: 'First'
  },
  {
    id: 39,
    roomNumber: '302C',
    block: '1',
    floor: 'Third'
  },
  {
    id: 40,
    roomNumber: '811A',
    block: '1',
    floor: 'Eighth'
  },
  {
    id: 41,
    roomNumber: '205',
    block: '1',
    floor: 'Second'
  },
  {
    id: 42,
    roomNumber: '211A',
    block: '1',
    floor: 'Second'
  },
  // Additional rooms from B.Tech CSE IV - F timetable
  {
    id: 43,
    roomNumber: '214C',
    block: '1',
    floor: 'Second'
  },
  {
    id: 44,
    roomNumber: '214B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 45,
    roomNumber: '312',
    block: '1',
    floor: 'Third'
  },
  {
    id: 46,
    roomNumber: '204',
    block: '1',
    floor: 'Second'
  },
  // Additional rooms from B.Tech CSE IV - G timetable
  {
    id: 47,
    roomNumber: '502',
    block: '1',
    floor: 'Fifth'
  },
  {
    id: 48,
    roomNumber: '313A',
    block: '1',
    floor: 'Third'
  },
  {
    id: 49,
    roomNumber: '010B',
    block: '1',
    floor: 'Ground'
  },
  {
    id: 50,
    roomNumber: '503',
    block: '1',
    floor: 'Fifth'
  },
  // Additional rooms from B.Tech CSE IV - H timetable
  {
    id: 51,
    roomNumber: '211A',
    block: '1',
    floor: 'Second'
  },
  {
    id: 52,
    roomNumber: '211B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 53,
    roomNumber: '102',
    block: '1',
    floor: 'First'
  },
  // Additional rooms from B.Tech CSE IV - I timetable
  {
    id: 54,
    roomNumber: '214A',
    block: '1',
    floor: 'Second'
  },
  {
    id: 55,
    roomNumber: '214B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 56,
    roomNumber: '308D',
    block: '1',
    floor: 'Third'
  },
  // Additional rooms from B.Tech CSE IV - J timetable
  {
    id: 57,
    roomNumber: '205',
    block: '1',
    floor: 'Second'
  },
  {
    id: 58,
    roomNumber: '206',
    block: '1',
    floor: 'Second'
  },
  {
    id: 59,
    roomNumber: '119A',
    block: '1',
    floor: 'First'
  },
  {
    id: 60,
    roomNumber: '119B',
    block: '1',
    floor: 'First'
  },
  {
    id: 61,
    roomNumber: '312',
    block: '1',
    floor: 'Third'
  },
  {
    id: 62,
    roomNumber: '313A',
    block: '1',
    floor: 'Third'
  },
  // Additional rooms from B.Tech CSE IV - K timetable
  {
    id: 63,
    roomNumber: '206',
    block: '1',
    floor: 'Second'
  },
  {
    id: 64,
    roomNumber: '207',
    block: '1',
    floor: 'Second'
  },
  {
    id: 65,
    roomNumber: '119A',
    block: '1',
    floor: 'First'
  },
  {
    id: 66,
    roomNumber: '119B',
    block: '1',
    floor: 'First'
  },
  {
    id: 67,
    roomNumber: '313A',
    block: '1',
    floor: 'Third'
  },
  // Additional rooms from B.Tech CSE IV - L timetable
  {
    id: 68,
    roomNumber: '207',
    block: '1',
    floor: 'Second'
  },
  {
    id: 69,
    roomNumber: '104',
    block: '1',
    floor: 'First'
  },
  {
    id: 70,
    roomNumber: '119A',
    block: '1',
    floor: 'First'
  },
  {
    id: 71,
    roomNumber: '119B',
    block: '1',
    floor: 'First'
  },
  {
    id: 72,
    roomNumber: '206',
    block: '3',
    floor: 'Second'
  },
  {
    id: 73,
    roomNumber: '312',
    block: '1',
    floor: 'Third'
  },
  {
    id: 74,
    roomNumber: '313A',
    block: '1',
    floor: 'Third'
  },
  {
    id: 75,
    roomNumber: '211B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 76,
    roomNumber: '312',
    block: '1',
    floor: 'Third'
  },
  {
    id: 77,
    roomNumber: '214C',
    block: '1',
    floor: 'Second'
  },
  // Additional room from B.Tech CSE IV - O timetable
  {
    id: 78,
    roomNumber: '315',
    block: '1',
    floor: 'Third'
  },
  // Additional rooms from B.Tech CSE IV - P timetable
  {
    id: 79,
    roomNumber: '208B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 80,
    roomNumber: '313B',
    block: '1',
    floor: 'Third'
  },
  {
    id: 81,
    roomNumber: '214C',
    block: '1',
    floor: 'Second'
  },
  {
    id: 82,
    roomNumber: '315',
    block: '1',
    floor: 'Third'
  },
  {
    id: 83,
    roomNumber: '214B',
    block: '1',
    floor: 'Second'
  },
  {
    id: 84,
    roomNumber: '502',
    block: '1',
    floor: 'Fifth'
  },
  {
    id: 85,
    roomNumber: '308D',
    block: '3',
    floor: 'Third'
  },
  // Additional rooms from B.Tech CSE IV - Q timetable

  {
    id: 86,
    roomNumber: '118',
    block: '1',
    floor: 'First'
  },
  {
    id: 87,
    roomNumber: '308D',
    block: '3',
    floor: 'Third'
  },
  // Additional rooms from B.Tech CSE-VI A timetable
{
  id: 88,
  roomNumber: 'RM403',
  block: '2',
  floor: 'Fourth'
},
// Additional rooms from B.Tech CSE-VI B timetable
{
  id: 89,
  roomNumber: '503',
  block: '1',
  floor: 'Fifth'
},
{
  id: 90,
  roomNumber: '211A',
  block: '1',
  floor: 'Second'
}
  
];

// Time periods from the Sharda University timetable
const timePeriodMap = [
  { id: '1', time: '8:30-9:25' },
  { id: '2', time: '9:30-10:20' },
  { id: '3', time: '10:25-11:15' },
  { id: '4', time: '11:20-12:10' },
  { id: '5', time: '12:15-13:05' },
  { id: '6', time: '13:10-14:00' },
  { id: '7', time: '14:05-14:55' },
  { id: '8', time: '15:00-15:50' },
  { id: '9', time: '15:55-16:40' }
];

// Mock schedule data extracted from the timetable image
// Format: roomId-day-periodId
const mockClassSchedule = [
  // Monday classes
  { roomId: 9, day: 'monday', periodIds: ['1', '2', '6'] },  // 217 Block 1: ONB403 (1,2), CSE249 (6)
  { roomId: 4, day: 'monday', periodIds: ['3'] },            // 204 Block 1: CSE014 (3)
  { roomId: 13, day: 'monday', periodIds: ['7'] },           // 010A Block 1: CSP249 (7)
  { roomId: 9, day: 'monday', periodIds: ['8', '9'] },       // 217 Block 1: ONB403 (8,9)
  { roomId: 24, day: 'monday', periodIds: ['1'] },           // 109 Block 1: ARP208 (1)
  { roomId: 24, day: 'monday', periodIds: ['2'] },           // 109 Block 1: CSE251 (2)
  { roomId: 23, day: 'monday', periodIds: ['4', '5'] },      // 107 Block 1: ONB403 (4,5)
  { roomId: 29, day: 'monday', periodIds: ['7', '8'] },      // RMB02 Block 4: IED001 (7,8)
  { roomId: 30, day: 'monday', periodIds: ['1'] },           // 118 Block 1: ARP208 (1)
  { roomId: 17, day: 'monday', periodIds: ['4'] },           // 109 Block 1: CSE249 (4)
  { roomId: 30, day: 'monday', periodIds: ['6'] },           // 118 Block 1: IED001 (6)
  { roomId: 17, day: 'monday', periodIds: ['8'] },           // 109 Block 1: ARP208 (8)
  { roomId: 39, day: 'monday', periodIds: ['1'] },           // 302C Block 1: PBL-2 (1)
  { roomId: 40, day: 'monday', periodIds: ['2'] },           // 811A Block 1: CSP249 (2)
  { roomId: 29, day: 'monday', periodIds: ['6'] },           // RMB02 Block 4: TOC-TUT (6)
  { roomId: 34, day: 'monday', periodIds: ['7'] },           // 117 Block 1: CSE251 (7)
  { roomId: 38, day: 'monday', periodIds: ['8'] },           // 108 Block 1: CSE249 (8)
  { roomId: 43, day: 'monday', periodIds: ['1'] },           // 214C Block 1: PBL-2 (1)
  { roomId: 44, day: 'monday', periodIds: ['2'] },           // 214B Block 1: CSP249 (2)
  { roomId: 17, day: 'monday', periodIds: ['3'] },           // 109 Block 1: ARP208 (3)
  { roomId: 17, day: 'monday', periodIds: ['5'] },           // 109 Block 1: CSE249 (5)
  { roomId: 45, day: 'monday', periodIds: ['6', '7'] },      // 312 Block 1: IED001 (6,7)
  { roomId: 47, day: 'monday', periodIds: ['1', '2'] },      // 502 Block 1: HMM305 (1,2)
  { roomId: 48, day: 'monday', periodIds: ['3'] },           // 313A Block 1: CSE249 (3)
  { roomId: 34, day: 'monday', periodIds: ['5'] },           // 117 Block 1: CSE251 (5)
  { roomId: 34, day: 'monday', periodIds: ['6'] },           // 117 Block 1: IED001 (6)
  { roomId: 23, day: 'monday', periodIds: ['8'] },           // 107 Block 1: CSE249 (8)
  { roomId: 30, day: 'monday', periodIds: ['2', '3'] },      // 118 Block 1: ONB403 (2,3)
  { roomId: 30, day: 'monday', periodIds: ['4'] },           // 118 Block 1: IED001 (4)
  { roomId: 30, day: 'monday', periodIds: ['5'] },           // 118 Block 1: CSE249 (5)
  { roomId: 51, day: 'monday', periodIds: ['6', '7'] },      // 211A Block 1: CSP249 (6,7)
  { roomId: 30, day: 'monday', periodIds: ['8'] },           // 118 Block 1: CSE251 (8)
  { roomId: 4, day: 'monday', periodIds: ['1', '2'] },       // 204 Block 1: HMM305 (1,2)
  { roomId: 54, day: 'monday', periodIds: ['3', '4'] },      // 214A Block 1: PBL-2, CSP249 (3,4)
  { roomId: 4, day: 'monday', periodIds: ['5'] },            // 204 Block 1: CSE249 (5)
  { roomId: 4, day: 'monday', periodIds: ['7'] },            // 204 Block 1: ARP208 (7)
  { roomId: 4, day: 'monday', periodIds: ['8'] },            // 204 Block 1: CSE251 (8)
  { roomId: 29, day: 'monday', periodIds: ['1'] },           // RMB02 Block 3: ONB403 (1)
  { roomId: 58, day: 'monday', periodIds: ['3'] },           // 206 Block 1: CSA203 (3)
  { roomId: 57, day: 'monday', periodIds: ['4'] },           // 205 Block 1: BTY223 (4)
  { roomId: 57, day: 'monday', periodIds: ['5'] },           // 205 Block 1: CSE249 (5)
  { roomId: 59, day: 'monday', periodIds: ['8'] },           // 119A Block 1: CSP249 (8)
  { roomId: 60, day: 'monday', periodIds: ['8'] },           // 119B Block 1: CSP250 (8)
  { roomId: 62, day: 'monday', periodIds: ['9'] },           // 313A Block 1: CSE011/012/CSA021 (9)
  { roomId: 63, day: 'monday', periodIds: ['4'] },           // 206 Block 1: BTY223 (4)
  { roomId: 63, day: 'monday', periodIds: ['7'] },           // 206 Block 1: ONB403 (7)
  { roomId: 63, day: 'monday', periodIds: ['8'] },           // 206 Block 1: ONB403 (8)
  { roomId: 67, day: 'monday', periodIds: ['9'] },           // 313A Block 1: CSE011/012/CSA021 (9)
  { roomId: 68, day: 'monday', periodIds: ['1'] },           // 207 Block 1: CSE249 (1)
  { roomId: 68, day: 'monday', periodIds: ['2'] },           // 207 Block 1: CSA203 (2)
  { roomId: 70, day: 'monday', periodIds: ['3'] },           // 119A Block 1: PBL-2 (3)
  { roomId: 71, day: 'monday', periodIds: ['3'] },           // 119B Block 1: CSP250 (3)
  { roomId: 72, day: 'monday', periodIds: ['5', '6'] },      // 206 Block 3: HMM305 (5,6)
  { roomId: 74, day: 'monday', periodIds: ['1'] },           // 313A Block 1: CSE249 (1)
  { roomId: 74, day: 'monday', periodIds: ['2'] },           // 313A Block 1: CSE250 (2)
  { roomId: 74, day: 'monday', periodIds: ['3'] },           // 313A Block 1: CSD202 (3)
  { roomId: 75, day: 'monday', periodIds: ['4'] },           // 211B Block 1: CSP249/CSP250 (4)
  { roomId: 74, day: 'monday', periodIds: ['7'] },           // 313A Block 1: ARP208 (7)
  { roomId: 74, day: 'monday', periodIds: ['8', '9'] },      // 313A Block 1: CSD202/CSA021/CSD012 (8,9)
  { roomId: 45, day: 'monday', periodIds: ['2'] },          // 312 Block 1: CSE250 (2) - B.Tech CSE IV-O
  { roomId: 45, day: 'monday', periodIds: ['3'] },          // 312 Block 1: CSE249 (3) - B.Tech CSE IV-O
  { roomId: 9, day: 'monday', periodIds: ['5'] },           // 217 Block 1: BTY223 (5) - B.Tech CSE IV-O
  { roomId: 9, day: 'monday', periodIds: ['6'] },           // 217 Block 1: CSC013 (6) - B.Tech CSE IV-O
  { roomId: 45, day: 'monday', periodIds: ['8', '9'] },     // 312 Block 1: HMM305 (8,9) - B.Tech CSE IV-O
  { roomId: 79, day: 'monday', periodIds: ['1'] },          // 208B Block 1: CSE250 (1) - B.Tech CSE IV-P
  { roomId: 79, day: 'monday', periodIds: ['2'] },          // 208B Block 1: VAT012 (2) - B.Tech CSE IV-P
  { roomId: 79, day: 'monday', periodIds: ['3'] },          // 208B Block 1: VAT012 (3) - B.Tech CSE IV-P
  { roomId: 45, day: 'monday', periodIds: ['5'] },          // 312 Block 1: BTY223 (5) - B.Tech CSE IV-P
  { roomId: 80, day: 'monday', periodIds: ['6'] },          // 313B Block 1: ONB403 (6) - B.Tech CSE IV-P
  { roomId: 80, day: 'monday', periodIds: ['7'] },          // 313B Block 1: ONB403 (7) - B.Tech CSE IV-P
  { roomId: 79, day: 'monday', periodIds: ['8'] },          // 208B Block 1: CSE249 (8) - B.Tech CSE IV-P
  { roomId: 17, day: 'monday', periodIds: ['9'] },          // 107 Block 1: CSE011 (9) - B.Tech CSE IV-P
  { roomId: 5, day: 'monday', periodIds: ['9'] },           // 205 Block 1: CSE012 (9) - B.Tech CSE IV-P
  { roomId: 4, day: 'monday', periodIds: ['9'] },           // 204 Block 1: CSE014 (9) - B.Tech CSE IV-P
  { roomId: 80, day: 'monday', periodIds: ['2'] },          // 313B Block 1: CSE250 (2) - B.Tech CSE IV-Q
  { roomId: 80, day: 'monday', periodIds: ['3'] },          // 313B Block 1: BTY223 (3) - B.Tech CSE IV-Q
  { roomId: 80, day: 'monday', periodIds: ['4'] },          // 313B Block 1: ARP208 (4) - B.Tech CSE IV-Q
  { roomId: 80, day: 'monday', periodIds: ['5'] },          // 313B Block 1: CSE249 (5) - B.Tech CSE IV-Q
  { roomId: 87, day: 'monday', periodIds: ['7'] },          // 308D Block 3: HMM305 (7) - B.Tech CSE IV-Q
  { roomId: 87, day: 'monday', periodIds: ['8'] },          // 308D Block 3: HMM305 (8) - B.Tech CSE IV-Q
  { roomId: 80, day: 'monday', periodIds: ['9'] },          // 313B Block 1: ARP208 (9) - B.Tech CSE IV-Q
  { roomId: 88, day: 'monday', periodIds: ['1'] },          // RM403 Block 2: CSE031 (1) - B.Tech CSE-VI A
  { roomId: 29, day: 'monday', periodIds: ['2'] },          // RMB02 Block 4: HMM305 (2) - B.Tech CSE-VI A
  { roomId: 29, day: 'monday', periodIds: ['3'] },          // RMB02 Block 4: HMM305 (3) - B.Tech CSE-VI A
  { roomId: 88, day: 'monday', periodIds: ['5'] },          // RM403 Block 2: CSE353 (5) - B.Tech CSE-VI A
  { roomId: 88, day: 'monday', periodIds: ['6'] },          // RM403 Block 2: ARP306 (6) - B.Tech CSE-VI A
  { roomId: 88, day: 'monday', periodIds: ['7'] },          // RM403 Block 2: CSE041 (7) - B.Tech CSE-VI A
  { roomId: 88, day: 'monday', periodIds: ['8'] },          // RM403 Block 2: CSP396 (8) - B.Tech CSE-VI A
  { roomId: 88, day: 'monday', periodIds: ['9'] },          // RM403 Block 2: CSP396 (9) - B.Tech CSE-VI A
  { roomId: 88, day: 'monday', periodIds: ['1'] },          // RM403 Block 2: CSE031 (1) - B.Tech CSE-VI B
  { roomId: 45, day: 'monday', periodIds: ['2'] },          // 312 Block 1: CSE032 (2) - B.Tech CSE-VI B
  { roomId: 44, day: 'monday', periodIds: ['3'] },          // 214B Block 1: CSP353 (3) - Group 2 - B.Tech CSE-VI B
  { roomId: 47, day: 'monday', periodIds: ['5'] },          // 502 Block 1: CSE353 (5) - B.Tech CSE-VI B
  { roomId: 47, day: 'monday', periodIds: ['7'] },          // 502 Block 1: CSE041 (7) - B.Tech CSE-VI B
  { roomId: 47, day: 'monday', periodIds: ['8'] },          // 502 Block 1: HMM305 (8) - B.Tech CSE-VI B
  { roomId: 47, day: 'monday', periodIds: ['9'] },          // 502 Block 1: HMM305 (9) - B.Tech CSE-VI B
  
  // Tuesday classes
  { roomId: 12, day: 'tuesday', periodIds: ['1'] },          // 502 Block 1: CSE251 (1)
  { roomId: 4, day: 'tuesday', periodIds: ['2'] },           // 204 Block 1: CSE014 (2)
  { roomId: 9, day: 'tuesday', periodIds: ['3', '4'] },      // 217 Block 1: ARP208 (3), ONB403 (4)
  { roomId: 8, day: 'tuesday', periodIds: ['6'] },           // 214A Block 1: CSP249 (6)
  { roomId: 14, day: 'tuesday', periodIds: ['7'] },          // 211C Block 1: PBL-2 (7)
  { roomId: 15, day: 'tuesday', periodIds: ['1'] },          // 105 Block 1: CSE251 (1)
  { roomId: 15, day: 'tuesday', periodIds: ['3', '4'] },     // 105 Block 1: IED001 (3,4)
  { roomId: 20, day: 'tuesday', periodIds: ['7'] },          // 313B Block 1: CSE249 (7)
  { roomId: 14, day: 'tuesday', periodIds: ['9'] },          // 211A Block 1: CSP014 (9)
  { roomId: 24, day: 'tuesday', periodIds: ['1'] },          // 109 Block 1: ARP208 (1)
  { roomId: 24, day: 'tuesday', periodIds: ['3'] },          // 109 Block 1: IED001 (3)
  { roomId: 24, day: 'tuesday', periodIds: ['4'] },          // 109 Block 1: CSE251 (4)
  { roomId: 6, day: 'tuesday', periodIds: ['6'] },           // 207 Block 1: CSE249 (6)
  { roomId: 26, day: 'tuesday', periodIds: ['8'] },          // 211C Block 1: CSP014 (8)
  { roomId: 23, day: 'tuesday', periodIds: ['3', '4'] },     // 107 Block 1: VAT012 (3,4)
  { roomId: 34, day: 'tuesday', periodIds: ['6'] },          // 117 Block 1: CSE251 (6)
  { roomId: 29, day: 'tuesday', periodIds: ['7'] },          // RMB02 Block 2: CSE249 (7)
  { roomId: 33, day: 'tuesday', periodIds: ['8'] },          // 214A Block 1: CSP014 (8)
  { roomId: 38, day: 'tuesday', periodIds: ['2'] },          // 108 Block 1: CSE249 (2)
  { roomId: 38, day: 'tuesday', periodIds: ['3'] },          // 108 Block 1: ARP208 (3)
  { roomId: 35, day: 'tuesday', periodIds: ['5'] },          // 010B Block 1: CSP249 (5)
  { roomId: 38, day: 'tuesday', periodIds: ['7'] },          // 108 Block 1: CSE249 (7)
  { roomId: 38, day: 'tuesday', periodIds: ['8'] },          // 108 Block 1: ARP208 (8)
  { roomId: 34, day: 'tuesday', periodIds: ['9'] },          // 117 Block 1: CSE251 (9)
  { roomId: 17, day: 'tuesday', periodIds: ['3'] },          // 109 Block 1: ARP208 (3)
  { roomId: 44, day: 'tuesday', periodIds: ['5'] },          // 214B Block 1: CSP249 (5)
  { roomId: 17, day: 'tuesday', periodIds: ['7'] },          // 109 Block 1: CSE249 (7)
  { roomId: 46, day: 'tuesday', periodIds: ['8', '9'] },     // 204 Block 1: ONB403 (8,9)
  { roomId: 31, day: 'tuesday', periodIds: ['1', '2'] },     // 206 Block 1: ONB403 (1,2)
  { roomId: 44, day: 'tuesday', periodIds: ['4'] },          // 214B Block 1: PBL-2 (4)
  { roomId: 34, day: 'tuesday', periodIds: ['5'] },          // 117 Block 1: CSE251 (5)
  { roomId: 34, day: 'tuesday', periodIds: ['7'] },          // 117 Block 1: CSE249 (7)
  { roomId: 34, day: 'tuesday', periodIds: ['8'] },          // 117 Block 1: ARP208 (8)
  { roomId: 30, day: 'tuesday', periodIds: ['3'] },          // 118 Block 1: ONB403 (3)
  { roomId: 30, day: 'tuesday', periodIds: ['5'] },          // 118 Block 1: CSE249 (5)
  { roomId: 30, day: 'tuesday', periodIds: ['6'] },          // 118 Block 1: IED001 (6)
  { roomId: 53, day: 'tuesday', periodIds: ['7'] },          // 104 Block 1: CSE251 (7)
  { roomId: 4, day: 'tuesday', periodIds: ['1'] },           // 204 Block 1: ARP208 (1)
  { roomId: 4, day: 'tuesday', periodIds: ['5'] },           // 204 Block 1: CSE251 (5)
  { roomId: 4, day: 'tuesday', periodIds: ['7'] },           // 204 Block 1: CSE249 (7)
  { roomId: 9, day: 'tuesday', periodIds: ['8', '9'] },      // 217 Block 1: VAT012 (8,9)
  { roomId: 29, day: 'tuesday', periodIds: ['1'] },          // RMB02 Block 3: ONB403 (1)
  { roomId: 57, day: 'tuesday', periodIds: ['2'] },          // 205 Block 1: CSE250 (2)
  { roomId: 59, day: 'tuesday', periodIds: ['4'] },          // 119A Block 1: CSP250 (4)
  { roomId: 57, day: 'tuesday', periodIds: ['5'] },          // 205 Block 1: CSE249 (5)
  { roomId: 57, day: 'tuesday', periodIds: ['7'] },          // 205 Block 1: BTY223 (7)
  { roomId: 58, day: 'tuesday', periodIds: ['8'] },          // 206 Block 1: ARP208 (8)
  { roomId: 61, day: 'tuesday', periodIds: ['9'] },          // 312 Block 1: CSE250 (9)
  { roomId: 64, day: 'tuesday', periodIds: ['1'] },          // 207 Block 1: ONB403 (1)
  { roomId: 64, day: 'tuesday', periodIds: ['2'] },          // 207 Block 1: HMM305 (2)
  { roomId: 63, day: 'tuesday', periodIds: ['3'] },          // 206 Block 1: ARP208 (3)
  { roomId: 65, day: 'tuesday', periodIds: ['5'] },          // 119A Block 1: PBL-2 (5)
  { roomId: 66, day: 'tuesday', periodIds: ['5'] },          // 119B Block 1: CSP249 (5)
  { roomId: 63, day: 'tuesday', periodIds: ['7'] },          // 206 Block 1: CSE250 (7)
  { roomId: 63, day: 'tuesday', periodIds: ['8'] },          // 206 Block 1: HMM305 (8)
  { roomId: 63, day: 'tuesday', periodIds: ['9'] },          // 206 Block 1: HMM305 (9)
  { roomId: 69, day: 'tuesday', periodIds: ['1'] },          // 104 Block 1: ARP208 (1)
  { roomId: 69, day: 'tuesday', periodIds: ['2'] },          // 104 Block 1: CSE250 (2)
  { roomId: 68, day: 'tuesday', periodIds: ['4'] },          // 207 Block 1: CSA203 (4)
  { roomId: 68, day: 'tuesday', periodIds: ['7'] },          // 207 Block 1: BTY223 (7)
  { roomId: 68, day: 'tuesday', periodIds: ['8', '9'] },     // 207 Block 1: ONB403 (8,9)
  { roomId: 74, day: 'tuesday', periodIds: ['1'] },          // 313A Block 1: VAT012 (1)
  { roomId: 74, day: 'tuesday', periodIds: ['2'] },          // 313A Block 1: VAT012 (2)
  { roomId: 74, day: 'tuesday', periodIds: ['4'] },          // 313A Block 1: CSE250 (4)
  { roomId: 74, day: 'tuesday', periodIds: ['5'] },          // 313A Block 1: BTY223 (5)
  { roomId: 74, day: 'tuesday', periodIds: ['8'] },          // 313A Block 1: ARP208 (8)
  { roomId: 74, day: 'tuesday', periodIds: ['9'] },          // 313A Block 1: BTY223 (9)
  { roomId: 45, day: 'tuesday', periodIds: ['2'] },         // 312 Block 1: CSE249 (2) - B.Tech CSE IV-O
  { roomId: 45, day: 'tuesday', periodIds: ['4'] },         // 312 Block 1: CSE250 (4) - B.Tech CSE IV-O
  { roomId: 45, day: 'tuesday', periodIds: ['5', '6'] },    // 312 Block 1: ONB403 (5,6) - B.Tech CSE IV-O
  { roomId: 45, day: 'tuesday', periodIds: ['7'] },         // 312 Block 1: BTY223 (7) - B.Tech CSE IV-O
  { roomId: 45, day: 'tuesday', periodIds: ['8'] },         // 312 Block 1: ARP208 (8) - B.Tech CSE IV-O
  { roomId: 81, day: 'tuesday', periodIds: ['2'] },         // 214C Block 1: CSP249 (2) - B.Tech CSE IV-P
  { roomId: 79, day: 'tuesday', periodIds: ['4'] },         // 208B Block 1: CSE250 (4) - B.Tech CSE IV-P
  { roomId: 79, day: 'tuesday', periodIds: ['5'] },         // 208B Block 1: CSE249 (5) - B.Tech CSE IV-P
  { roomId: 45, day: 'tuesday', periodIds: ['7'] },         // 312 Block 1: BTY223 (7) - B.Tech CSE IV-P
  { roomId: 80, day: 'tuesday', periodIds: ['8'] },         // 313B Block 1: ONB403 (8) - B.Tech CSE IV-P
  { roomId: 80, day: 'tuesday', periodIds: ['9'] },         // 313B Block 1: HMM305 (9) - B.Tech CSE IV-P
  { roomId: 80, day: 'tuesday', periodIds: ['1'] },         // 313B Block 1: VAT012 (1) - B.Tech CSE IV-Q
  { roomId: 80, day: 'tuesday', periodIds: ['2'] },         // 313B Block 1: VAT012 (2) - B.Tech CSE IV-Q
  { roomId: 79, day: 'tuesday', periodIds: ['3'] },         // 208B Block 1: CBT011/CTV011 (3) - B.Tech CSE IV-Q
  { roomId: 80, day: 'tuesday', periodIds: ['4'] },         // 313B Block 1: CSE250 (4) - B.Tech CSE IV-Q
  { roomId: 80, day: 'tuesday', periodIds: ['5'] },         // 313B Block 1: HMM305 (5) - B.Tech CSE IV-Q
  { roomId: 80, day: 'tuesday', periodIds: ['6'] },         // 313B Block 1: ONB403 (6) - B.Tech CSE IV-Q
  { roomId: 15, day: 'tuesday', periodIds: ['7'] },         // 105 Block 1: CTV202 (7) - B.Tech CSE IV-Q
  { roomId: 16, day: 'tuesday', periodIds: ['8'] },         // 106 Block 1: CBT202 (8) - B.Tech CSE IV-Q
  { roomId: 88, day: 'tuesday', periodIds: ['1'] },         // RM403 Block 2: VAT013 (1) - B.Tech CSE-VI A
  { roomId: 88, day: 'tuesday', periodIds: ['2'] },         // RM403 Block 2: VAT013 (2) - B.Tech CSE-VI A
  { roomId: 13, day: 'tuesday', periodIds: ['4'] },         // 010A Block 1: CSP390 (4) - Group 2 - B.Tech CSE-VI A
  { roomId: 88, day: 'tuesday', periodIds: ['5'] },         // RM403 Block 2: HMM305 (5) - B.Tech CSE-VI A
  { roomId: 88, day: 'tuesday', periodIds: ['6'] },         // RM403 Block 2: ARP306 (6) - B.Tech CSE-VI A
  { roomId: 17, day: 'tuesday', periodIds: ['9'] },         // 109 Block 1: CSE042 (9) - B.Tech CSE-VI A
  { roomId: 90, day: 'tuesday', periodIds: ['1'] },         // 211A Block 1: CSP390 (1) - Group 1 - B.Tech CSE-VI B
  { roomId: 89, day: 'tuesday', periodIds: ['5'] },         // 503 Block 1: ARP306 (5) - B.Tech CSE-VI B
  { roomId: 47, day: 'tuesday', periodIds: ['9'] },         // 502 Block 1: CSE041 (9) - B.Tech CSE-VI B
  { roomId: 17, day: 'tuesday', periodIds: ['9'] },         // 109 Block 1: CSE042 (9) - B.Tech CSE-VI B
  
  // Wednesday classes
  { roomId: 9, day: 'wednesday', periodIds: ['1'] },         // 217 Block 1: ARP208 (1)
  { roomId: 12, day: 'wednesday', periodIds: ['2'] },        // 502 Block 1: CSE251 (2)
  { roomId: 7, day: 'wednesday', periodIds: ['3'] },         // 211B Block 1: CSP014 (3)
  { roomId: 4, day: 'wednesday', periodIds: ['6'] },         // 204 Block 1: CSE014 (6)
  { roomId: 10, day: 'wednesday', periodIds: ['7'] },        // 206 Block 1: CSE012 (7)
  { roomId: 18, day: 'wednesday', periodIds: ['1'] },        // 206 Block 1: ARP208 (1)
  { roomId: 15, day: 'wednesday', periodIds: ['2'] },        // 105 Block 1: CSE251 (2)
  { roomId: 14, day: 'wednesday', periodIds: ['3'] },        // 211A Block 1: CSP014 (3)
  { roomId: 19, day: 'wednesday', periodIds: ['8', '9'] },   // 304 Block 1: CSE011/012 (8,9)
  { roomId: 24, day: 'wednesday', periodIds: ['1'] },        // 109 Block 1: CSE251 (1)
  { roomId: 26, day: 'wednesday', periodIds: ['3'] },        // 211C Block 1: CSP014 (3)
  { roomId: 13, day: 'wednesday', periodIds: ['6'] },        // 010B Block 1: PBL-2 (6)
  { roomId: 28, day: 'wednesday', periodIds: ['6'] },        // 302C Block 1: CSE249 (6)
  { roomId: 6, day: 'wednesday', periodIds: ['7'] },         // 207 Block 1: CSE249 (7)
  { roomId: 31, day: 'wednesday', periodIds: ['1', '2'] },   // 205 Block 1: ONB403 (1,2)
  { roomId: 17, day: 'wednesday', periodIds: ['5'] },        // 109 Block 1: CSE249 (5)
  { roomId: 34, day: 'wednesday', periodIds: ['7'] },        // 117 Block 1: CSE251 (7)
  { roomId: 23, day: 'wednesday', periodIds: ['1'] },        // 107 Block 1: HMM305 (1)
  { roomId: 23, day: 'wednesday', periodIds: ['2'] },        // 107 Block 1: ONB403 (2)
  { roomId: 41, day: 'wednesday', periodIds: ['4', '5'] },   // 205 Block 1: HMM305 (4,5)
  { roomId: 34, day: 'wednesday', periodIds: ['6'] },        // 117 Block 1: CSE251 (6)
  { roomId: 17, day: 'wednesday', periodIds: ['9'] },        // 109 Block 1: CSE249 (9)
  { roomId: 29, day: 'wednesday', periodIds: ['1', '2'] },   // RMB02 Block 4: IED001 (1,2)
  { roomId: 23, day: 'wednesday', periodIds: ['3', '4'] },   // 207 Block 1: VAT012 (3,4)
  { roomId: 5, day: 'wednesday', periodIds: ['7'] },         // 205 Block 1: ARP208 (7)
  { roomId: 50, day: 'wednesday', periodIds: ['8'] },        // 503 Block 1: TOC-TUT (8)
  { roomId: 49, day: 'wednesday', periodIds: ['2'] },        // 010B Block 1: CSP249 (2)
  { roomId: 30, day: 'wednesday', periodIds: ['3'] },        // 118 Block 1: ARP208 (3)
  { roomId: 30, day: 'wednesday', periodIds: ['5'] },        // 118 Block 1: CSE249 (5)
  { roomId: 34, day: 'wednesday', periodIds: ['7'] },        // 217 Block 1: HMM305 (7)
  { roomId: 30, day: 'wednesday', periodIds: ['8'] },        // 118 Block 1: IED001 (8)
  { roomId: 53, day: 'wednesday', periodIds: ['9'] },        // 102 Block 1: CSE251 (9)
  { roomId: 4, day: 'wednesday', periodIds: ['2'] },         // 204 Block 1: IED001 (2)
  { roomId: 4, day: 'wednesday', periodIds: ['3'] },         // 204 Block 1: CSE249 (3)
  { roomId: 4, day: 'wednesday', periodIds: ['5'] },         // 204 Block 1: CSE251 (5)
  { roomId: 4, day: 'wednesday', periodIds: ['6', '7'] },    // 204 Block 1: ONB403 (6,7)
  { roomId: 4, day: 'wednesday', periodIds: ['9'] },         // 204 Block 1: CSE251 (9)
  { roomId: 58, day: 'wednesday', periodIds: ['3'] },        // 206 Block 1: ARP208 (3)
  { roomId: 57, day: 'wednesday', periodIds: ['4'] },        // 205 Block 1: CSA203 (4)
  { roomId: 57, day: 'wednesday', periodIds: ['5'] },        // 205 Block 1: CSE249 (5)
  { roomId: 57, day: 'wednesday', periodIds: ['7'] },        // 205 Block 1: ARP208 (7)
  { roomId: 58, day: 'wednesday', periodIds: ['9'] },        // 206 Block 1: CSE250 (9)
  { roomId: 63, day: 'wednesday', periodIds: ['2'] },        // 206 Block 1: ARP208 (2)
  { roomId: 63, day: 'wednesday', periodIds: ['3'] },        // 206 Block 1: CSE250 (3)
  { roomId: 17, day: 'wednesday', periodIds: ['4'] },        // 104 Block 1: CSE249 (4)
  { roomId: 65, day: 'wednesday', periodIds: ['6'] },        // 119A Block 1: CSP250 (6)
  { roomId: 66, day: 'wednesday', periodIds: ['6'] },        // 119B Block 1: PBL-2 (6)
  { roomId: 63, day: 'wednesday', periodIds: ['9'] },        // 206 Block 1: ARP208 (9)
  { roomId: 68, day: 'wednesday', periodIds: ['1'] },        // 207 Block 1: CSA203 (1)
  { roomId: 68, day: 'wednesday', periodIds: ['2'] },        // 207 Block 1: ARP208 (2)
  { roomId: 73, day: 'wednesday', periodIds: ['3'] },        // 312 Block 1: CSE250 (3)
  { roomId: 70, day: 'wednesday', periodIds: ['4'] },        // 119A Block 1: CSP250 (4)
  { roomId: 71, day: 'wednesday', periodIds: ['4'] },        // 119B Block 1: CSP249 (4)
  { roomId: 67, day: 'wednesday', periodIds: ['8'] },        // 313A Block 1: CSE011/012/CSA021 (8)
  { roomId: 68, day: 'wednesday', periodIds: ['9'] },        // 207 Block 1: BTY223 (9)
  { roomId: 74, day: 'wednesday', periodIds: ['1'] },        // 313A Block 1: CSE250 (1)
  { roomId: 74, day: 'wednesday', periodIds: ['2'] },        // 313A Block 1: ONB403 (2)
  { roomId: 74, day: 'wednesday', periodIds: ['3'] },        // 313A Block 1: ONB403 (3)
  { roomId: 76, day: 'wednesday', periodIds: ['6'] },        // 312 Block 1: HMM305 (6)
  { roomId: 76, day: 'wednesday', periodIds: ['7'] },        // 312 Block 1: HMM305 (7)
  { roomId: 77, day: 'wednesday', periodIds: ['8'] },        // 214C Block 1: CRP202 (8)
  { roomId: 45, day: 'wednesday', periodIds: ['1'] },       // 312 Block 1: CSE250 (1) - B.Tech CSE IV-O
  { roomId: 45, day: 'wednesday', periodIds: ['3'] },       // 312 Block 1: CSE250 (3) - B.Tech CSE IV-O
  { roomId: 45, day: 'wednesday', periodIds: ['4'] },       // 312 Block 1: CSE249 (4) - B.Tech CSE IV-O
  { roomId: 45, day: 'wednesday', periodIds: ['5'] },       // 312 Block 1: CSC301 (5) - B.Tech CSE IV-O
  { roomId: 7, day: 'wednesday', periodIds: ['6'] },        // 211B Block 1: PBL-2 (6) - Group 1 - B.Tech CSE IV-O
  { roomId: 8, day: 'wednesday', periodIds: ['6'] },        // 214A Block 1: CSP250 (6) - Group 2 - B.Tech CSE IV-O
  { roomId: 7, day: 'wednesday', periodIds: ['7'] },        // 211B Block 1: PBL-2 (7) - Group 1 - B.Tech CSE IV-O
  { roomId: 8, day: 'wednesday', periodIds: ['7'] },        // 214A Block 1: CSP250 (7) - Group 2 - B.Tech CSE IV-O
  { roomId: 44, day: 'wednesday', periodIds: ['8'] },       // 214B Block 1: CSP249 (8) - Group 1 - B.Tech CSE IV-O
  { roomId: 13, day: 'wednesday', periodIds: ['8'] },       // 010A Block 1: PBL-2 (8) - Group 2 - B.Tech CSE IV-O
  { roomId: 44, day: 'wednesday', periodIds: ['9'] },       // 214B Block 1: CSP249 (9) - Group 1 - B.Tech CSE IV-O
  { roomId: 13, day: 'wednesday', periodIds: ['9'] },       // 010A Block 1: PBL-2 (9) - Group 2 - B.Tech CSE IV-O
  { roomId: 79, day: 'wednesday', periodIds: ['1'] },       // 208B Block 1: CSE250 (1) - B.Tech CSE IV-P
  { roomId: 79, day: 'wednesday', periodIds: ['3'] },       // 208B Block 1: ARP208 (3) - B.Tech CSE IV-P
  { roomId: 79, day: 'wednesday', periodIds: ['4'] },       // 208B Block 1: CSE250 (4) - B.Tech CSE IV-P
  { roomId: 79, day: 'wednesday', periodIds: ['5'] },       // 208B Block 1: CSX202 (5) - B.Tech CSE IV-P
  { roomId: 82, day: 'wednesday', periodIds: ['6'] },       // 315 Block 1: CXP202 (6) - B.Tech CSE IV-P
  { roomId: 17, day: 'wednesday', periodIds: ['7'] },       // 107 Block 1: CSE011 (7) - B.Tech CSE IV-P
  { roomId: 5, day: 'wednesday', periodIds: ['7'] },        // 205 Block 1: CSE012 (7) - B.Tech CSE IV-P
  { roomId: 4, day: 'wednesday', periodIds: ['7'] },        // 204 Block 1: CSE014 (7) - B.Tech CSE IV-P
  { roomId: 17, day: 'wednesday', periodIds: ['8'] },       // 107 Block 1: CSE011 (8) - B.Tech CSE IV-P
  { roomId: 5, day: 'wednesday', periodIds: ['8'] },        // 205 Block 1: CSE012 (8) - B.Tech CSE IV-P
  { roomId: 4, day: 'wednesday', periodIds: ['8'] },        // 204 Block 1: CSE014 (8) - B.Tech CSE IV-P
  { roomId: 79, day: 'wednesday', periodIds: ['9'] },       // 208B Block 1: CSE249 (9) - B.Tech CSE IV-P
  { roomId: 80, day: 'wednesday', periodIds: ['1'] },       // 313B Block 1: CSE250 (1) - B.Tech CSE IV-Q
  { roomId: 78, day: 'wednesday', periodIds: ['3', '4'] },  // 315 Block 1: CSP250 (3,4) - Group 1 - B.Tech CSE IV-Q
  { roomId: 80, day: 'wednesday', periodIds: ['5'] },       // 313B Block 1: BTY223 (5) - B.Tech CSE IV-Q
  { roomId: 44, day: 'wednesday', periodIds: ['6'] },       // 214B Block 1: PBL-2 (6) - B.Tech CSE IV-Q
  { roomId: 79, day: 'wednesday', periodIds: ['8'] },       // 208B Block 1: CBT011/CTV011 (8) - B.Tech CSE IV-Q
  { roomId: 80, day: 'wednesday', periodIds: ['9'] },       // 313B Block 1: CSE249 (9) - B.Tech CSE IV-Q
  { roomId: 88, day: 'wednesday', periodIds: ['4'] },       // RM403 Block 2: ARP306 (4) - B.Tech CSE-VI A
  { roomId: 88, day: 'wednesday', periodIds: ['5'] },       // RM403 Block 2: CSE041 (5) - B.Tech CSE-VI A
  { roomId: 30, day: 'wednesday', periodIds: ['6'] },       // 118 Block 1: CSE042 (6) - B.Tech CSE-VI A
  { roomId: 88, day: 'wednesday', periodIds: ['8'] },       // RM403 Block 2: CSE051 (8) - B.Tech CSE-VI A
  { roomId: 88, day: 'wednesday', periodIds: ['9'] },       // RM403 Block 2: CSE051 (9) - B.Tech CSE-VI A
  { roomId: 47, day: 'wednesday', periodIds: ['3'] },       // 502 Block 1: VAT013 (3) - B.Tech CSE-VI B
  { roomId: 47, day: 'wednesday', periodIds: ['4'] },       // 502 Block 1: VAT013 (4) - B.Tech CSE-VI B
  { roomId: 47, day: 'wednesday', periodIds: ['5'] },       // 502 Block 1: CSE353 (5) - B.Tech CSE-VI B
  { roomId: 48, day: 'wednesday', periodIds: ['6'] },       // 313A Block 1: CSE041 (6) - B.Tech CSE-VI B
  { roomId: 30, day: 'wednesday', periodIds: ['6'] },       // 118 Block 1: CSE042 (6) - B.Tech CSE-VI B
  { roomId: 47, day: 'wednesday', periodIds: ['9'] },       // 502 Block 1: CSE051 (9) - B.Tech CSE-VI B
  
  // Thursday classes
  { roomId: 21, day: 'thursday', periodIds: ['1'] },         // 211A Block 3: CSP249 (1)
  { roomId: 3, day: 'thursday', periodIds: ['4', '5'] },     // 117 Block 1: HMM305 (4,5)
  { roomId: 5, day: 'thursday', periodIds: ['6'] },          // 205 Block 1: CSE249 (6)
  { roomId: 16, day: 'thursday', periodIds: ['5'] },         // 106 Block 1: HMM305 (5)
  { roomId: 16, day: 'thursday', periodIds: ['6'] },         // 106 Block 1: ONB403 (6)
  { roomId: 16, day: 'thursday', periodIds: ['7'] },         // 106 Block 1: HMM305 (7)
  { roomId: 17, day: 'thursday', periodIds: ['8'] },         // 109 Block 1: ARP208 (8)
  { roomId: 19, day: 'thursday', periodIds: ['9'] },         // 304 Block 1: CSE071 (9)
  { roomId: 29, day: 'thursday', periodIds: ['1', '2'] },    // RMB02 Block 4: VAT012 (1,2)
  { roomId: 25, day: 'thursday', periodIds: ['6'] },         // 211B Block 1: CSP249 (6)
  { roomId: 27, day: 'thursday', periodIds: ['6'] },         // 214A Block 1: PBL-2 (6)
  { roomId: 23, day: 'thursday', periodIds: ['8', '9'] },    // 107 Block 1: ONB403, HMM305 (8,9)
  { roomId: 32, day: 'thursday', periodIds: ['4', '5'] },    // 206 Block 1: HMM305 (4,5)
  { roomId: 37, day: 'thursday', periodIds: ['6'] },         // 710A Block 4: CSP249 (6)
  { roomId: 35, day: 'thursday', periodIds: ['6'] },         // 010A Block 1: PBL-2 (6)
  { roomId: 34, day: 'thursday', periodIds: ['8', '9'] },    // 117 Block 1: ONB403 (8), HMM305 (9)
  { roomId: 42, day: 'thursday', periodIds: ['3'] },         // 211B Block 1: CSP014 (3)
  { roomId: 40, day: 'thursday', periodIds: ['6'] },         // 811A Block 1: PBL-2 (6)
  { roomId: 38, day: 'thursday', periodIds: ['8', '9'] },    // 108 Block 1: VAT012 (8,9)
  { roomId: 17, day: 'thursday', periodIds: ['1', '2'] },    // 109 Block 1: HMM305 (1,2)
  { roomId: 17, day: 'thursday', periodIds: ['5'] },         // 109 Block 1: CSE251 (5)
  { roomId: 17, day: 'thursday', periodIds: ['6'] },         // 109 Block 1: IED001 (6)
  { roomId: 34, day: 'thursday', periodIds: ['9'] },         // 217 Block 1: CSE251 (9)
  { roomId: 34, day: 'thursday', periodIds: ['1'] },         // 117 Block 1: ARP208 (1)
  { roomId: 49, day: 'thursday', periodIds: ['6'] },         // 010A Block 1: CSP249 (6)
  { roomId: 49, day: 'thursday', periodIds: ['7'] },         // 010B Block 1: PBL-2 (7)
  { roomId: 46, day: 'thursday', periodIds: ['8', '9'] },    // 204 Block 1: CSE071 (8,9)
  { roomId: 30, day: 'thursday', periodIds: ['6', '7'] },    // 118 Block 1: HMM305 (6,7)
  { roomId: 53, day: 'thursday', periodIds: ['8'] },         // 102 Block 1: CSE251 (8)
  { roomId: 4, day: 'thursday', periodIds: ['1'] },          // 204 Block 1: ONB403 (1)
  { roomId: 4, day: 'thursday', periodIds: ['2'] },          // 204 Block 1: HMM305 (2)
  { roomId: 54, day: 'thursday', periodIds: ['3'] },         // 214A Block 1: CSP014 (3)
  { roomId: 4, day: 'thursday', periodIds: ['6'] },          // 204 Block 1: IED001 (6)
  { roomId: 4, day: 'thursday', periodIds: ['8', '9'] },     // 204 Block 1: CSE071 (8,9)
  { roomId: 57, day: 'thursday', periodIds: ['1'] },         // 205 Block 1: HMM305 (1)
  { roomId: 57, day: 'thursday', periodIds: ['2'] },         // 205 Block 1: HMM305 (2)
  { roomId: 62, day: 'thursday', periodIds: ['3'] },         // 313A Block 1: CSE011/012/CSA021 (3)
  { roomId: 57, day: 'thursday', periodIds: ['4'] },         // 205 Block 1: CSA203 (4)
  { roomId: 59, day: 'thursday', periodIds: ['7'] },         // 119A Block 1: PBL-2 (7)
  { roomId: 57, day: 'thursday', periodIds: ['8'] },         // 205 Block 1: CSE071 (8)
  { roomId: 57, day: 'thursday', periodIds: ['9'] },         // 205 Block 1: CSE071 (9)
  { roomId: 63, day: 'thursday', periodIds: ['2'] },         // 206 Block 1: CSA203 (2)
  { roomId: 67, day: 'thursday', periodIds: ['3'] },         // 313A Block 1: CSE011/012/CSA021 (3)
  { roomId: 17, day: 'thursday', periodIds: ['5'] },         // 104 Block 1: CSE250 (5)
  { roomId: 63, day: 'thursday', periodIds: ['8'] },         // 206 Block 1: CSE250 (8)
  { roomId: 63, day: 'thursday', periodIds: ['9'] },         // 206 Block 1: BTY223 (9)
  { roomId: 74, day: 'thursday', periodIds: ['2'] },         // 313A Block 1: CSE249 (2)
  { roomId: 74, day: 'thursday', periodIds: ['5'] },         // 313A Block 1: PBL-2 (5)
  { roomId: 74, day: 'thursday', periodIds: ['6'] },         // 313A Block 1: PBL-2 (6)
  { roomId: 45, day: 'thursday', periodIds: ['1'] },        // 312 Block 1: ARP208 (1) - B.Tech CSE IV-O
  { roomId: 45, day: 'thursday', periodIds: ['3'] },        // 312 Block 1: CSC301 (3) - B.Tech CSE IV-O
  { roomId: 45, day: 'thursday', periodIds: ['4'] },        // 312 Block 1: ONB403 (4) - B.Tech CSE IV-O
  { roomId: 45, day: 'thursday', periodIds: ['5'] },        // 312 Block 1: HMM305 (5) - B.Tech CSE IV-O
  { roomId: 9, day: 'thursday', periodIds: ['7'] },         // 217 Block 1: CSC013 (7) - B.Tech CSE IV-O
  { roomId: 4, day: 'thursday', periodIds: ['8'] },         // 204 Block 1: CSE071 (8) - B.Tech CSE IV-O
  { roomId: 4, day: 'thursday', periodIds: ['9'] },         // 204 Block 1: CSE071 (9) - B.Tech CSE IV-O
  { roomId: 79, day: 'thursday', periodIds: ['1'] },        // 208B Block 1: ARP208 (1) - B.Tech CSE IV-P
  { roomId: 79, day: 'thursday', periodIds: ['2'] },        // 208B Block 1: IED001 (2) - B.Tech CSE IV-P
  { roomId: 81, day: 'thursday', periodIds: ['3'] },        // 214C Block 1: CSP014 (3) - Group 1 - B.Tech CSE IV-P
  { roomId: 17, day: 'thursday', periodIds: ['4'] },        // 107 Block 1: CSE011 (4) - B.Tech CSE IV-P
  { roomId: 5, day: 'thursday', periodIds: ['4'] },         // 205 Block 1: CSE012 (4) - B.Tech CSE IV-P
  { roomId: 83, day: 'thursday', periodIds: ['6'] },        // 214B Block 1: CSP250 (6) - B.Tech CSE IV-P
  { roomId: 84, day: 'thursday', periodIds: ['8'] },        // 502 Block 1: CSX202 (8) - B.Tech CSE IV-P
  { roomId: 84, day: 'thursday', periodIds: ['9'] },        // 502 Block 1: CSX202 (9) - B.Tech CSE IV-P
  { roomId: 86, day: 'thursday', periodIds: ['1'] },        // 118 Block 1: ONB403 (1) - B.Tech CSE IV-Q
  { roomId: 86, day: 'thursday', periodIds: ['2'] },        // 118 Block 1: ONB403 (2) - B.Tech CSE IV-Q
  { roomId: 79, day: 'thursday', periodIds: ['3'] },        // 208B Block 1: CBT011/CTV011 (3) - B.Tech CSE IV-Q
  { roomId: 78, day: 'thursday', periodIds: ['4'] },        // 315 Block 1: CSP249 (4) - Group 1 - B.Tech CSE IV-Q
  { roomId: 13, day: 'thursday', periodIds: ['5'] },        // 010A Block 1: CSP250 (5) - Group 2 - B.Tech CSE IV-Q
  { roomId: 80, day: 'thursday', periodIds: ['6'] },        // 313B Block 1: ARP208 (6) - B.Tech CSE IV-Q
  { roomId: 4, day: 'thursday', periodIds: ['8'] },         // 204 Block 1: CSE071 (8) - B.Tech CSE IV-Q
  { roomId: 4, day: 'thursday', periodIds: ['9'] },         // 204 Block 1: CSE071 (9) - B.Tech CSE IV-Q
  { roomId: 88, day: 'thursday', periodIds: ['1'] },        // RM403 Block 2: CSE031 (1) - B.Tech CSE-VI A
  { roomId: 47, day: 'thursday', periodIds: ['2'] },        // 502 Block 1: CSE032 (2) - B.Tech CSE-VI A
  { roomId: 88, day: 'thursday', periodIds: ['5'] },        // RM403 Block 2: CSE353 (5) - B.Tech CSE-VI A
  { roomId: 14, day: 'thursday', periodIds: ['6'] },        // 211C Block 1: CSP353 (6) - Group 1 - B.Tech CSE-VI A
  { roomId: 88, day: 'thursday', periodIds: ['7'] },        // RM403 Block 2: HMM305 (7) - B.Tech CSE-VI A
  { roomId: 88, day: 'thursday', periodIds: ['8'] },        // RM403 Block 2: CSE051 (8) - B.Tech CSE-VI A
  { roomId: 88, day: 'thursday', periodIds: ['9'] },        // RM403 Block 2: CSE051 (9) - B.Tech CSE-VI A
  { roomId: 88, day: 'thursday', periodIds: ['2'] },        // RM403 Block 2: CSE031 (2) - B.Tech CSE-VI B
  { roomId: 47, day: 'thursday', periodIds: ['2'] },        // 502 Block 1: CSE032 (2) - B.Tech CSE-VI B
  { roomId: 47, day: 'thursday', periodIds: ['3'] },        // 502 Block 1: CSE353 (3) - B.Tech CSE-VI B
  { roomId: 47, day: 'thursday', periodIds: ['4'] },        // 502 Block 1: ARP306 (4) - B.Tech CSE-VI B
  { roomId: 47, day: 'thursday', periodIds: ['6'] },        // 502 Block 1: CSE051 (6) - B.Tech CSE-VI B
  { roomId: 47, day: 'thursday', periodIds: ['7'] },        // 502 Block 1: CSE051 (7) - B.Tech CSE-VI B
  
  // Friday classes
  { roomId: 9, day: 'friday', periodIds: ['1', '8'] },       // 217 Block 1: IED001 (1,8)
  { roomId: 1, day: 'friday', periodIds: ['3'] },            // 104 Block 1: CSE251 (3)
  { roomId: 5, day: 'friday', periodIds: ['9'] },            // 205 Block 1: CSE249 (9)
  { roomId: 20, day: 'friday', periodIds: ['6'] },           // 313B Block 1: TOC-TUT (6)
  { roomId: 15, day: 'friday', periodIds: ['7'] },           // 105 Block 1: IED001 (7)
  { roomId: 17, day: 'friday', periodIds: ['8', '9'] },      // 109 Block 1: VAT012 (8,9)
  { roomId: 23, day: 'friday', periodIds: ['6', '7'] },      // 107 Block 1: HMM305 (6,7)
  { roomId: 24, day: 'friday', periodIds: ['8'] },           // 109 Block 1: ARP208 (8)
  { roomId: 6, day: 'friday', periodIds: ['9'] },             // 207 Block 1: CSE249 (9)
  { roomId: 23, day: 'friday', periodIds: ['2'] },           // 107 Block 1: IED001 (2)
  { roomId: 34, day: 'friday', periodIds: ['3'] },           // 117 Block 1: CSE251 (3)
  { roomId: 36, day: 'friday', periodIds: ['6'] },           // 302C Block 1: CSP249 (6)
  { roomId: 30, day: 'friday', periodIds: ['7'] },           // 118 Block 1: ARP208 (7)
  { roomId: 17, day: 'friday', periodIds: ['8'] },           // 109 Block 1: IED001 (8)
  { roomId: 34, day: 'friday', periodIds: ['9'] },            // 117 Block 1: CSE251 (9)
  { roomId: 31, day: 'friday', periodIds: ['1', '2'] },      // 205 Block 1: ONB403 (1,2)
  { roomId: 42, day: 'friday', periodIds: ['3'] },           // 211B Block 1: CSP014 (3)
  { roomId: 38, day: 'friday', periodIds: ['6', '7'] },      // 108 Block 1: IED001 (6,7)
  { roomId: 17, day: 'friday', periodIds: ['1', '2'] },      // 109 Block 1: VAT012 (1,2)
  { roomId: 42, day: 'friday', periodIds: ['3'] },           // 211B Block 1: CSP014 (3)
  { roomId: 34, day: 'friday', periodIds: ['7'] },           // 117 Block 1: ONB403 (7)
  { roomId: 34, day: 'friday', periodIds: ['8'] },           // 117 Block 1: HMM305 (8)
  { roomId: 31, day: 'friday', periodIds: ['1'] },           // 206 Block 1: ONB403 (1)
  { roomId: 31, day: 'friday', periodIds: ['2'] },           // 206 Block 1: HMM305 (2)
  { roomId: 44, day: 'friday', periodIds: ['3'] },           // 214B Block 1: CSP014 (3)
  { roomId: 34, day: 'friday', periodIds: ['5'] },           // 117 Block 1: CSE251 (5)
  { roomId: 52, day: 'friday', periodIds: ['6'] },           // 211B Block 1: PBL-2 (6)
  { roomId: 30, day: 'friday', periodIds: ['8', '9'] },      // 118 Block 1: VAT012 (8,9)
  { roomId: 54, day: 'friday', periodIds: ['1'] },           // 214A Block 1: CSP249 (1)
  { roomId: 55, day: 'friday', periodIds: ['2'] },           // 214B Block 1: PBL-2 (2)
  { roomId: 4, day: 'friday', periodIds: ['3'] },            // 204 Block 1: IED001 (3)
  { roomId: 56, day: 'friday', periodIds: ['4'] },           // 308D Block 1: CSP014 (4)
  { roomId: 4, day: 'friday', periodIds: ['6'] },            // 204 Block 1: ARP208 (6)
  { roomId: 59, day: 'friday', periodIds: ['1'] },           // 119A Block 1: PBL-2 (1)
  { roomId: 61, day: 'friday', periodIds: ['3'] },           // 312 Block 1: HMM305 (3)
  { roomId: 61, day: 'friday', periodIds: ['4'] },           // 312 Block 1: ONB403 (4)
  { roomId: 57, day: 'friday', periodIds: ['5'] },           // 205 Block 1: CSE250 (5)
  { roomId: 63, day: 'friday', periodIds: ['7'] },           // 206 Block 1: VAT012 (7)
  { roomId: 63, day: 'friday', periodIds: ['8'] },           // 206 Block 1: VAT012 (8)
  { roomId: 65, day: 'friday', periodIds: ['6'] },           // 119A Block 1: CSP249 (6)
  { roomId: 66, day: 'friday', periodIds: ['6'] },           // 119B Block 1: CSP250 (6)
  { roomId: 63, day: 'friday', periodIds: ['7'] },           // 206 Block 1: CSA203 (7)
  { roomId: 63, day: 'friday', periodIds: ['8'] },           // 206 Block 1: CSA203 (8)
  { roomId: 63, day: 'friday', periodIds: ['9'] },           // 206 Block 1: BTY223 (9)
  { roomId: 68, day: 'friday', periodIds: ['1'] },           // 207 Block 1: ONB403 (1)
  { roomId: 68, day: 'friday', periodIds: ['2'] },           // 207 Block 1: HMM305 (2)
  { roomId: 68, day: 'friday', periodIds: ['3'] },           // 207 Block 1: CSE249 (3)
  { roomId: 68, day: 'friday', periodIds: ['4'] },           // 207 Block 1: ARP208 (4)
  { roomId: 69, day: 'friday', periodIds: ['5'] },           // 104 Block 1: CSE250 (5)
  { roomId: 74, day: 'friday', periodIds: ['2'] },           // 313A Block 1: CSE250 (2)
  { roomId: 74, day: 'friday', periodIds: ['3'] },           // 313A Block 1: CSE249 (3)
  { roomId: 74, day: 'friday', periodIds: ['6'] },           // 313A Block 1: ONB403 (6)
  { roomId: 74, day: 'friday', periodIds: ['7'] },           // 313A Block 1: HMM305 (7)
  { roomId: 49, day: 'friday', periodIds: ['1'] },          // 010B Block 1: CSP250 (1) - Group 1 - B.Tech CSE IV-O
  { roomId: 78, day: 'friday', periodIds: ['1'] },          // 315 Block 1: CCP301 (1) - Group 1 - B.Tech CSE IV-O
  { roomId: 78, day: 'friday', periodIds: ['3'] },          // 315 Block 1: CCP301 (3) - Group 2 - B.Tech CSE IV-O
  { roomId: 44, day: 'friday', periodIds: ['3'] },          // 214B Block 1: CSP249 (3) - Group 2 - B.Tech CSE IV-O
  { roomId: 45, day: 'friday', periodIds: ['6'] },          // 312 Block 1: VAT012 (6) - B.Tech CSE IV-O
  { roomId: 45, day: 'friday', periodIds: ['7'] },          // 312 Block 1: VAT012 (7) - B.Tech CSE IV-O
  { roomId: 9, day: 'friday', periodIds: ['8'] },           // 217 Block 1: CSC013 (8) - B.Tech CSE IV-O
  { roomId: 45, day: 'friday', periodIds: ['9'] },          // 312 Block 1: ARP208 (9) - B.Tech CSE IV-O
  { roomId: 79, day: 'friday', periodIds: ['1'] },          // 208B Block 1: ARP208 (1) - B.Tech CSE IV-P
  { roomId: 79, day: 'friday', periodIds: ['2'] },          // 208B Block 1: IED001 (2) - B.Tech CSE IV-P
  { roomId: 79, day: 'friday', periodIds: ['3'] },          // 208B Block 1: IED001 (3) - B.Tech CSE IV-P
  { roomId: 85, day: 'friday', periodIds: ['4'] },          // 308D Block 3: CSP014 (4) - Group 2 - B.Tech CSE IV-P
  { roomId: 83, day: 'friday', periodIds: ['6'] },          // 214B Block 1: PBL-2 (6) - B.Tech CSE IV-P
  { roomId: 79, day: 'friday', periodIds: ['8'] },          // 208B Block 1: HMM305 (8) - B.Tech CSE IV-P
  { roomId: 79, day: 'friday', periodIds: ['9'] },          // 208B Block 1: HMM305 (9) - B.Tech CSE IV-P
  { roomId: 15, day: 'friday', periodIds: ['1'] },          // 105 Block 1: CTV202 (1) - B.Tech CSE IV-Q
  { roomId: 86, day: 'friday', periodIds: ['2'] },          // 118 Block 1: CBT202 (2) - B.Tech CSE IV-Q
  { roomId: 80, day: 'friday', periodIds: ['5'] },          // 313B Block 1: CSE249 (5) - B.Tech CSE IV-Q
  { roomId: 15, day: 'friday', periodIds: ['6'] },          // 105 Block 1: CTV202 (6) - B.Tech CSE IV-Q
  { roomId: 16, day: 'friday', periodIds: ['7'] },          // 106 Block 1: CBT202 (7) - B.Tech CSE IV-Q
  { roomId: 17, day: 'friday', periodIds: ['8'] },          // 109 Block 1: CSE250 (8) - B.Tech CSE IV-Q
  { roomId: 77, day: 'friday', periodIds: ['9'] },          // 214C Block 1: CSP249 (9) - Group 2 - B.Tech CSE IV-Q 
  { roomId: 88, day: 'friday', periodIds: ['3'] },          // RM403 Block 2: CSE031 (3) - B.Tech CSE-VI A
  { roomId: 47, day: 'friday', periodIds: ['4'] },          // 502 Block 1: CSE032 (4) - B.Tech CSE-VI A
  { roomId: 88, day: 'friday', periodIds: ['5'] },          // RM403 Block 2: CSE353 (5) - B.Tech CSE-VI A
  { roomId: 15, day: 'friday', periodIds: ['6'] },          // 105 Block 1: CSP390 (6) - Group 1 - B.Tech CSE-VI A
  { roomId: 44, day: 'friday', periodIds: ['8'] },          // 214B Block 1: CSP353 (8) - Group 2 - B.Tech CSE-VI A 
  { roomId: 13, day: 'friday', periodIds: ['1'] },          // 010A Block 1: CSP353 (1) - Group 1 - B.Tech CSE-VI B
  { roomId: 36, day: 'friday', periodIds: ['2'] },          // 302C Block 1: CSP390 (2) - Group 2 - B.Tech CSE-VI B
  { roomId: 88, day: 'friday', periodIds: ['3'] },          // RM403 Block 2: CSE031 (3) - B.Tech CSE-VI B
  { roomId: 47, day: 'friday', periodIds: ['3'] },          // 502 Block 1: CSE032 (3) - B.Tech CSE-VI B
  { roomId: 47, day: 'friday', periodIds: ['5'] },          // 502 Block 1: CSP396 (5) - B.Tech CSE-VI B
  { roomId: 47, day: 'friday', periodIds: ['6'] },          // 502 Block 1: CSP396 (6) - B.Tech CSE-VI B
  { roomId: 47, day: 'friday', periodIds: ['7'] },          // 502 Block 1: ARP306 (7) - B.Tech CSE-VI B
  { roomId: 47, day: 'friday', periodIds: ['9'] },          // 502 Block 1: HMM305 (9) - B.Tech CSE-VI B 
];

/**
 * Fetches free rooms based on given parameters
 * @param {string} blockNo - The block number
 * @param {string} day - The day of the week
 * @param {string} periodId - The period ID (1-9)
 * @returns {Promise<Array>} - A promise that resolves to an array of free rooms
 */
const fetchFreeRooms = (blockNo, day, periodId) => {
  // In a real app, this would be an API call to Firebase
  
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        // Filter rooms by block
        let filteredRooms = mockRooms.filter(room => room.block === blockNo);
        
        // Filter out rooms that are occupied during the specified period
        filteredRooms = filteredRooms.filter(room => {
          // Find if this room has any classes scheduled for this day
          const roomSchedules = mockClassSchedule.filter(
            schedule => schedule.roomId === room.id && schedule.day === day
          );
          
          // If no schedule found, room is available
          if (roomSchedules.length === 0) return true;
          
          // Check if any of the room's schedules include the selected period
          const isOccupied = roomSchedules.some(
            schedule => schedule.periodIds.includes(periodId)
          );
          
          // Return rooms that are not occupied
          return !isOccupied;
        });
        
        // Add the time period information to the results
        const timePeriodInfo = timePeriodMap.find(tp => tp.id === periodId);
        
        const roomsWithTimeInfo = filteredRooms.map(room => ({
          ...room,
          periodInfo: timePeriodInfo ? timePeriodInfo.time : 'Unknown time period'
        }));
        
        resolve(roomsWithTimeInfo);
      } catch (error) {
        reject('Failed to fetch free rooms. Please try again.');
      }
    }, 1500); // Simulate a delay of 1.5 seconds
  });
};

// Get all time periods for use in dropdown
const getTimePeriods = () => {
  return timePeriodMap;
};

// Get available blocks
const getBlocks = () => {
  return ['1', '2', '3', '4'];
};

// Get days of the week for dropdown
const getDays = () => {
  return [
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' }
  ];
};

// In future versions, we would add more functions here:
// - fetchAllRooms
// - fetchRoomDetails
// - bookRoom
// - etc. 