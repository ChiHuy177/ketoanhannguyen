const fs = require('fs');

let localesContent = fs.readFileSync('src/locales.js', 'utf8');

const missingData = `export const PROCESS_DATA = {
  vi: [
    { title: 'Tiếp nhận', desc: 'Tìm hiểu ngành nghề, quy mô, mô hình.' },
    { title: 'Phân tích', desc: 'Xác định vấn đề về kế toán, chứng từ và quy trình.' },
    { title: 'Đánh giá', desc: 'Xác định rủi ro và nội dung cần xử lý.' },
    { title: 'Đề xuất', desc: 'Đưa ra phương án phù hợp với nhu cầu doanh nghiệp.', active: true },
    { title: 'Thực hiện', desc: 'Thiết lập hệ thống và thực hiện công việc kế toán.' },
    { title: 'Rà soát', desc: 'Kiểm tra số liệu, chứng từ và nghĩa vụ thuế.' },
    { title: 'Cảnh báo', desc: 'Chủ động rà soát và thông tin rủi ro cần xử lý.' }
  ],
  en: [
    { title: 'Receive', desc: 'Understand the industry, scale, and model.' },
    { title: 'Analyze', desc: 'Identify accounting, documentation and process issues.' },
    { title: 'Evaluate', desc: 'Identify risks and contents to be handled.' },
    { title: 'Propose', desc: 'Provide a plan suitable for business needs.', active: true },
    { title: 'Execute', desc: 'Set up the system and perform accounting work.' },
    { title: 'Review', desc: 'Check data, documents and tax obligations.' },
    { title: 'Warn', desc: 'Proactively review and inform about risks to be handled.' }
  ]
};

export const CUSTOMERS_DATA = {
  vi: [
    { title: 'Doanh nghiệp mới thành lập', desc: 'Từ thủ tục ban đầu đến thiết lập hệ thống kế toán, thuế.' },
    { title: 'Doanh nghiệp đang hoạt động', desc: 'Rà soát, chuẩn hóa và tổ chức lại hệ thống kế toán.' },
    { title: 'Doanh nghiệp thương mại', desc: 'Quản lý doanh thu, giá vốn, hàng tồn kho, công nợ và hóa đơn.' },
    { title: 'Doanh nghiệp sản xuất', desc: 'Theo dõi nguyên vật liệu, giá thành, chi phí sản xuất và báo cáo tài chính.' },
    { title: 'Doanh nghiệp xây dựng', desc: 'Quản lý hợp đồng, doanh thu, chi phí, nghiệm thu và hồ sơ thanh toán.' },
    { title: 'Chuỗi bán lẻ', desc: 'Kiểm soát doanh thu, tiền mặt, hệ thống POS, hóa đơn và dòng tiền.' },
    { title: 'Nhà hàng, khách sạn', desc: 'Thiết lập quy trình doanh thu, chi phí, nhân sự và thuế.' },
    { title: 'Doanh nghiệp có yếu tố nước ngoài', desc: 'Hỗ trợ kế toán, thuế và hồ sơ liên quan trong quá trình hoạt động.' }
  ],
  en: [
    { title: 'Newly established businesses', desc: 'From initial procedures to setting up accounting and tax systems.' },
    { title: 'Operating businesses', desc: 'Review, standardize and reorganize the accounting system.' },
    { title: 'Commercial enterprises', desc: 'Manage revenue, cost of goods sold, inventory, debt and invoices.' },
    { title: 'Manufacturing enterprises', desc: 'Track raw materials, costs, production costs and financial reports.' },
    { title: 'Construction enterprises', desc: 'Manage contracts, revenue, costs, acceptance and payment records.' },
    { title: 'Retail chains', desc: 'Control revenue, cash, POS systems, invoices and cash flow.' },
    { title: 'Restaurants, hotels', desc: 'Set up procedures for revenue, costs, personnel and taxes.' },
    { title: 'Foreign-invested enterprises', desc: 'Support accounting, tax and related records during operations.' }
  ]
};

export const DIFFERENTIATORS_DATA`;

localesContent = localesContent.replace('export const DIFFERENTIATORS_DATA', missingData);

fs.writeFileSync('src/locales.js', localesContent);
