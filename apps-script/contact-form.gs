/**
 * HƯỚNG DẪN CÀI ĐẶT
 * 1. Tạo một Google Sheet mới, đặt tên dòng đầu (header) là:
 *    Thời gian | Họ tên | Điện thoại | Email | Nội dung | Ngôn ngữ
 * 2. Vào Extensions > Apps Script, xóa code mẫu, dán toàn bộ nội dung file này vào.
 * 3. Deploy > New deployment > chọn type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy URL Web App vừa tạo (dạng https://script.google.com/macros/s/.../exec)
 *    và dán vào file .env ở project (biến VITE_GOOGLE_SCRIPT_URL).
 * 5. Mỗi khi sửa code này, phải tạo "New deployment" lại (hoặc Manage deployments > Edit > New version)
 *    để URL áp dụng thay đổi mới nhất.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var langLabel = data.lang === 'en' ? 'English' : 'Tiếng Việt';

    sheet.appendRow([
      new Date(),
      data.name || '',
      // Dấu nháy đơn ở đầu ép Sheets lưu dạng text, tránh mất số 0 đầu SĐT.
      data.phone ? "'" + data.phone : '',
      data.email || '',
      data.note || '',
      langLabel,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
