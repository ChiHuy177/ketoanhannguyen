const fs = require('fs');

let localesContent = fs.readFileSync('src/locales.js', 'utf8');

// Update locales for system section
const oldSystemItems = `      items: [
        { title: 'Làm đúng từ đầu', desc: 'Hệ thống chuẩn hóa giúp hạn chế rủi ro pháp lý.' },
        { title: 'Chủ động kiểm soát', desc: 'Nhận diện vấn đề trước khi cơ quan thuế thanh tra.' },
        { title: 'Thiết kế quy trình', desc: 'Xây dựng luồng luân chuyển chứng từ minh bạch, rõ ràng.' },
      ]`;
const newSystemItems = `      subtitle: 'Dịch vụ cung cấp',
      items: [
        { title: 'Làm đúng từ đầu', desc: 'Hệ thống chuẩn hóa giúp hạn chế rủi ro pháp lý.' },
        { title: 'Chủ động kiểm soát', desc: 'Nhận diện vấn đề trước khi cơ quan thuế thanh tra.' },
        { title: 'Thiết kế quy trình', desc: 'Xây dựng luồng luân chuyển chứng từ minh bạch, rõ ràng.' },
        { title: 'Tối ưu vận hành', desc: 'Giảm thiểu sai sót, tiết kiệm thời gian và chi phí quản lý.' },
      ]`;
localesContent = localesContent.replace(oldSystemItems, newSystemItems);

const oldSystemItemsEn = `      items: [
        { title: 'Do it right from the start', desc: 'Standardized systems help limit legal risks.' },
        { title: 'Proactive control', desc: 'Identify issues before tax audits.' },
        { title: 'Process design', desc: 'Build transparent and clear document workflows.' },
      ]`;
const newSystemItemsEn = `      subtitle: 'Services Provided',
      items: [
        { title: 'Do it right from the start', desc: 'Standardized systems help limit legal risks.' },
        { title: 'Proactive control', desc: 'Identify issues before tax audits.' },
        { title: 'Process design', desc: 'Build transparent and clear document workflows.' },
        { title: 'Operational optimization', desc: 'Minimize errors, save time and management costs.' },
      ]`;
if (localesContent.includes(oldSystemItemsEn)) {
    localesContent = localesContent.replace(oldSystemItemsEn, newSystemItemsEn);
} else {
    // Just in case it's not exactly matching
    localesContent = localesContent.replace(
        `      items: [\n        { title: 'Làm đúng từ đầu'`, 
        `      subtitle: 'Services Provided',\n      items: [\n        { title: 'Làm đúng từ đầu'`
    ); // simplified fallback, we can just replace the whole en block later if needed.
}

fs.writeFileSync('src/locales.js', localesContent);
