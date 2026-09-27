const fs = require('fs');

let localesContent = fs.readFileSync('src/locales.js', 'utf8');

const oldServicesDataRegex = /export const SERVICES_DATA = \{[\s\S]*?\};\n\nexport const DIFFERENTIATORS_DATA/;

const newServicesData = `export const SERVICES_DATA = {
  vi: [
    {
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      title: 'Thành lập & Thay đổi doanh nghiệp',
      note: 'Dịch vụ trọn gói về pháp lý doanh nghiệp nhanh chóng và chính xác.',
      items: [
        'Thành lập doanh nghiệp, chi nhánh, địa điểm kinh doanh',
        'Thay đổi thông tin doanh nghiệp',
        'Thủ tục tạm ngừng hoạt động',
        'Thủ tục giải thể doanh nghiệp',
        'Thủ tục liên quan đến hộ kinh doanh'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
      title: 'Kế toán – Thuế trọn gói',
      note: 'Giải pháp toàn diện giúp doanh nghiệp an tâm hoạt động.',
      items: [
        'Tư vấn tối ưu thuế',
        'Tư vấn thiết lập hệ thống kế toán',
        'Kê khai thuế, quyết toán thuế',
        'Lập chứng từ, sổ sách kế toán, báo cáo tài chính',
        'Giải trình với cơ quan thuế khi có yêu cầu',
        'Chịu trách nhiệm phục vụ kiểm tra quyết toán thuế'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
      title: 'Dịch vụ BHXH',
      note: 'Hỗ trợ các nghiệp vụ về bảo hiểm xã hội cho người lao động.',
      items: [
        'Thủ tục đăng ký BHXH',
        'Tăng giảm lao động',
        'Chế độ bảo hiểm y tế',
        'Tiếp đoàn thanh kiểm tra'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      title: 'Sản phẩm số',
      note: 'Cung cấp các công cụ số hóa hỗ trợ quản lý doanh nghiệp.',
      items: [
        'Chữ ký số',
        'Hóa đơn điện tử',
        'Phần mềm bán hàng',
        'Phần mềm kế toán',
        'Phần mềm BHXH'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      title: 'Dịch vụ cho người lao động nước ngoài',
      note: 'Hỗ trợ thủ tục pháp lý cho lao động người nước ngoài tại Việt Nam.',
      items: [
        'Thủ tục làm giấy phép lao động',
        'Thủ tục làm thẻ tạm trú, visa'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
      title: 'Rà soát sổ sách và Tư vấn rủi ro',
      note: 'Đảm bảo tính tuân thủ và tối ưu hóa hệ thống kế toán hiện tại.',
      items: [
        'Rà soát tờ khai và sổ sách kế toán',
        'Cảnh báo rủi ro tư vấn khắc phục và tối ưu'
      ]
    }
  ],
  en: [
    {
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      title: 'Business Establishment & Modification',
      note: 'Fast and accurate legal business services.',
      items: [
        'Establishment of businesses, branches, business locations',
        'Change of business information',
        'Business suspension procedures',
        'Business dissolution procedures',
        'Procedures related to household businesses'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
      title: 'Full-Package Accounting & Tax',
      note: 'Comprehensive solutions for peace of mind in business operations.',
      items: [
        'Tax optimization consulting',
        'Accounting system setup consulting',
        'Tax declaration, tax finalization',
        'Preparation of documents, accounting books, financial reports',
        'Explanation to tax authorities upon request',
        'Taking responsibility during tax audits'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
      title: 'Social Insurance Services',
      note: 'Supporting social insurance operations for employees.',
      items: [
        'Social insurance registration procedures',
        'Increasing/decreasing labor',
        'Health insurance policies',
        'Receiving inspection delegations'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      title: 'Digital Products',
      note: 'Providing digitalization tools to support business management.',
      items: [
        'Digital signature',
        'Electronic invoice',
        'Sales software',
        'Accounting software',
        'Social insurance software'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
      title: 'Services for Foreign Workers',
      note: 'Supporting legal procedures for foreign workers in Vietnam.',
      items: [
        'Work permit procedures',
        'Temporary residence card, visa procedures'
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
      title: 'Bookkeeping Review & Risk Consulting',
      note: 'Ensuring compliance and optimizing the current accounting system.',
      items: [
        'Reviewing tax returns and accounting books',
        'Warning of risks, consulting on remediation and optimization'
      ]
    }
  ]
};

export const DIFFERENTIATORS_DATA`;

localesContent = localesContent.replace(oldServicesDataRegex, newServicesData);

// also update the section title
localesContent = localesContent.replace(
  `servicesSection: {
      subtitle: 'Chuyên môn của chúng tôi',
      title: 'Dịch vụ cốt lõi'
    },`,
  `servicesSection: {
      subtitle: 'Chuyên môn của chúng tôi',
      title: 'Dịch vụ cung cấp'
    },`
);

localesContent = localesContent.replace(
  `servicesSection: {
      subtitle: 'Our Expertise',
      title: 'Core Services'
    },`,
  `servicesSection: {
      subtitle: 'Our Expertise',
      title: 'Services Provided'
    },`
);

fs.writeFileSync('src/locales.js', localesContent);
