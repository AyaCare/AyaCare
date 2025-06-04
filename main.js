// 多语言配置
const translations = {
    zh: {
        companyName: "新疆航贸通国际供应链有限公司",
        appTitle: "Kaspi 电商利润计算器",
        exchangeLabel: "当前汇率：1元人民币兑换",
        currencyLabel: "哈萨克斯坦坚戈",
        productInfo: "产品信息",
        categoryLabel: "商品分类",
        purchaseLabel: "采购价 (¥)",
        shippingLabel: "运费 (¥)",
        grossProfitLabel: "计划毛利 (¥)",
        cashbackLabel: "下单返利（%）",
        paymentLabel: "汇款方式",
        logisticsTitle: "物流信息",
        dimensionLabel: "尺寸（厘米）",
        volumeLabel: "体积（立方米）",
        weightLabel: "重量（千克）",
        kaspiPriceLabel: "Kaspi 售价",
        feesTitle: "头程、海外仓费用",
        overseasLabel: "海外仓费用",
        firstmileLabel: "头程费用",
        platformTitle: "平台费用",
        cashbackAmountLabel: "下单返利",
        kaspiShippingLabel: "Kaspi 运费",
        platformFeeLabel: "平台佣金",
        withdrawalTaxLabel: "提现税（4%）",
        returnTitle: "回款费用",
        withdrawalFeeLabel: "提现手续费（1%）",
        exchangeLossLabel: "汇损（1.42%）",
        remittanceFeeLabel: "汇款手续费",
        returnAmountLabel: "回款金额",
        kaspiPayLabel: "Kaspi pay提现到账金额",
        estimatedAmountLabel: "预估到账金额",
        profitLabelFinal: "利润",
        copyright: "© 2023 新疆航贸通国际供应链有限公司 | Kaspi 电商利润计算器",
        calculateBtn: "计算利润",
        cnyLabel: "人民币 (CNY)",
        kztLabel: "哈萨克斯坦坚戈 (KZT)",
        commissionLabel: "当前佣金率：",
        purchasePlaceholder: "输入采购价",
        shippingPlaceholder: "阿拉木图运费",
        grossProfitPlaceholder: "输入计划毛利",
        cashbackPlaceholder: "输入下单返利",
        weightPlaceholder: "输入重量",
        lengthPlaceholder: "长",
        widthPlaceholder: "宽",
        heightPlaceholder: "高",
        exchangePlaceholder: "输入汇率",
        categorySearchPlaceholder: "搜索分类...",
        overseasUnitLabel: "海外仓单价 (¥/m³)",
        firstmileUnitLabel: "头程单价 (¥/m³)",
        kaspiPriceCnyLabel: "人民币 (¥)",
        kaspiPriceKztLabel: "坚戈 (₸)",
        overseasToggleLabel: "是否计算海外仓费用",
        firstmileToggleLabel: "是否计算头程费用",
        withdrawalFeeToggleLabel: "是否计算提现手续费",
        exchangeLossToggleLabel: "是否计算汇损",
        remittanceFeeToggleLabel: "是否计算汇款手续费",
        historyTitle: "历史记录",
        exportBtn: "导出为CSV",
        clearBtn: "清空历史",
        deleteBtn: "删除",
        historyTableHeaders: [
            "商品分类", "采购价", "运费", "计划毛利", "下单返利(%)", "汇款方式",
            "尺寸(长宽高)", "体积", "重量", "海外仓费用", "头程费用", "下单返利",
            "Kaspi运费", "平台佣金", "提现税", "提现手续费", "汇损", "汇款手续费",
            "Kaspi提现", "回款金额", "预估到账", "利润", "币种", "操作"
        ],
        contactLabel: "业务咨询：",
        contactLinkText: "点击联系客服",
        disclaimerTitle: "免责声明",
        disclaimerText1: "以上计算结果仅供参考，不代表最终费用。实际费用可能因市场变化、汇率波动、平台政策调整等因素而有所不同，请以实际情况为准。",
        disclaimerText2: "本计算器提供的数据仅作为商业决策的参考依据，不构成任何形式的承诺或保证。使用本工具产生的任何商业风险由使用者自行承担。",
        adTitle: "增值服务"
    },
    ru: {
        companyName: "Синьцзянская Международная Логистическая Компания Хан Мао Тун",
        appTitle: "Калькулятор прибыли Kaspi",
        exchangeLabel: "Текущий курс: 1 юань = ",
        currencyLabel: "казахстанских тенге",
        productInfo: "Информация о продукте",
        categoryLabel: "Категория товара",
        purchaseLabel: "Закупочная цена (₸)",
        shippingLabel: "Стоимость доставки (₸)",
        grossProfitLabel: "Плановая валовая прибыль (₸)",
        cashbackLabel: "Кэшбэк за заказ (%)",
        paymentLabel: "Способ оплаты",
        logisticsTitle: "Логистическая информация",
        dimensionLabel: "Размеры (см)",
        volumeLabel: "Объем (м³)",
        weightLabel: "Вес (кг)",
        kaspiPriceLabel: "Цена на Kaspi",
        feesTitle: "Расходы на доставку и склад",
        overseasLabel: "Стоимость зарубежного склада (₸)",
        firstmileLabel: "Стоимость первой мили (₸)",
        platformTitle: "Платежи платформы",
        cashbackAmountLabel: "Сумма кэшбэка (₸)",
        kaspiShippingLabel: "Доставка Kaspi (₸)",
        platformFeeLabel: "Комиссия платформы (₸)",
        withdrawalTaxLabel: "Налог на вывод (4%) (₸)",
        returnTitle: "Расходы на возврат средств",
        withdrawalFeeLabel: "Комиссия за вывод (1%) (₸)",
        exchangeLossLabel: "Потери при обмене (1.42%) (₸)",
        remittanceFeeLabel: "Комиссия за перевод (₸)",
        returnAmountLabel: "Сумма возврата (₸)",
        kaspiPayLabel: "Сумма вывода Kaspi pay (₸)",
        estimatedAmountLabel: "Ожидаемая сумма к получению (₸)",
        profitLabelFinal: "Прибыль (₸)",
        copyright: "© 2023 Синьцзянская Международная Логистическая Компания Хан Мао Тун | Калькулятор прибыли Kaspi",
        calculateBtn: "Рассчитать прибыль",
        cnyLabel: "Юань (CNY)",
        kztLabel: "Тенге (KZT)",
        commissionLabel: "Текущая комиссия: ",
        purchasePlaceholder: "Введите закупочную цену",
        shippingPlaceholder: "Стоимость доставки в Алматы",
        grossProfitPlaceholder: "Введите плановую валовую прибыль",
        cashbackPlaceholder: "Введите кэшбэк за заказ",
        weightPlaceholder: "Введите вес",
        lengthPlaceholder: "Длина",
        widthPlaceholder: "Ширина",
        heightPlaceholder: "Высота",
        exchangePlaceholder: "Введите курс обмена",
        categorySearchPlaceholder: "Поиск категории...",
        overseasUnitLabel: "Цена зарубежного склада (₸/м³)",
        firstmileUnitLabel: "Цена первой мили (₸/м³)",
        kaspiPriceCnyLabel: "Юань (¥)",
        kaspiPriceKztLabel: "Тенге (₸)",
        overseasToggleLabel: "Расчет стоимости зарубежного склада",
        firstmileToggleLabel: "Расчет стоимости первой мили",
        withdrawalFeeToggleLabel: "Расчет комиссии за вывод",
        exchangeLossToggleLabel: "Расчет потерь при обмене",
        remittanceFeeToggleLabel: "Расчет комиссии за перевод",
        historyTitle: "История расчетов",
        exportBtn: "Экспорт в CSV",
        clearBtn: "Очистить историю",
        deleteBtn: "Удалить",
        historyTableHeaders: [
            "Категория", "Закупочная цена", "Стоимость доставки", "Плановая валовая прибыль", "Кэшбэк за заказ(%)", "Способ оплаты",
            "Размеры(Д×Ш×В)", "Объем", "Вес", "Стоимость зарубежного склада", "Стоимость первой мили", "Кэшбэк",
            "Доставка Kaspi", "Комиссия платформы", "Налог на вывод", "Комиссия за вывод", "Потери при обмене", "Комиссия за перевод",
            "Вывод Kaspi", "Сумма возврата", "Ожидаемая сумма", "Прибыль", "Валюта", "Действие"
        ],
        contactLabel: "Бизнес-консультации:",
        contactLinkText: "Нажмите, чтобы связаться",
        disclaimerTitle: "Отказ от ответственности",
        disclaimerText1: "Приведенные выше результаты расчетов приведены только для справки и не являются окончательной стоимостью. Фактические расходы могут различаться из-за изменения рыночных условий, колебаний обменного курса, корректировок политики платформы и других факторов. Пожалуйста, основывайтесь на фактической ситуации.",
        disclaimerText2: "Данные, предоставляемые данным калькулятором, предназначены только для справки при принятии коммерческих решений и не являются каким-либо обязательством или гарантией. Любые коммерческие риски, возникающие при использовании данного инструмента, несет пользователь.",
        adTitle: "Дополнительные услуги"
    }
};

// 浏览器环境检测
console.log('运行在浏览器环境中');
// 主应用代码
document.addEventListener('DOMContentLoaded', function () {
    // 初始化变量
    let currentLanguage = 'zh';
    let currentCurrency = 'cny';
    let currentCommission = 0.12; // 默认佣金率

    // 新增历史记录数组
    let historyRecords = [];

    // 获取DOM元素
    const exchangeRate = document.getElementById('exchangeRate');
    const purchasePrice = document.getElementById('purchasePrice');
    const shippingCost = document.getElementById('shippingCost');
    const grossProfit = document.getElementById('grossProfit'); // 修改为计划毛利
    const cashback = document.getElementById('cashback');
    const paymentMethod = document.getElementById('paymentMethod');
    const length = document.getElementById('length');
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const volume = document.getElementById('volume');
    const weight = document.getElementById('weight');
    const kaspiPriceCny = document.getElementById('kaspiPriceCny');
    const kaspiPriceKzt = document.getElementById('kaspiPriceKzt');
    const overseasWarehouse = document.getElementById('overseasWarehouse');
    const firstMile = document.getElementById('firstMile');
    const cashbackAmount = document.getElementById('cashbackAmount');
    const kaspiShipping = document.getElementById('kaspiShipping');
    const platformFee = document.getElementById('platformFee');
    const withdrawalTax = document.getElementById('withdrawalTax');
    const withdrawalFee = document.getElementById('withdrawalFee');
    const exchangeLoss = document.getElementById('exchangeLoss');
    const remittanceFee = document.getElementById('remittanceFee');
    const kaspiPayAmount = document.getElementById('kaspiPayAmount');
    const returnAmountDisplay = document.getElementById('returnAmountDisplay');
    const estimatedAmount = document.getElementById('estimatedAmount');
    const profit = document.getElementById('profit');
    const calculateBtn = document.getElementById('calculateBtn');
    const commissionDisplay = document.getElementById('commission-display');
    const container = document.querySelector('.container');
    // 获取新增的DOM元素
    const historyTableBody = document.getElementById('historyTableBody');
    const exportHistoryBtn = document.getElementById('exportHistoryBtn');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');

    // 新增元素
    const overseasUnitPrice = document.getElementById('overseasUnitPrice');
    const firstMileUnitPrice = document.getElementById('firstMileUnitPrice');
    const overseasToggle = document.getElementById('overseasToggle');
    const firstMileToggle = document.getElementById('firstMileToggle');
    const withdrawalFeeToggle = document.getElementById('withdrawalFeeToggle');
    const exchangeLossToggle = document.getElementById('exchangeLossToggle');
    const remittanceFeeToggle = document.getElementById('remittanceFeeToggle');

    // 错误消息元素
    const exchangeError = document.getElementById('exchange-error');
    const purchaseError = document.getElementById('purchase-error');
    const shippingError = document.getElementById('shipping-error');
    const profitError = document.getElementById('profit-error');
    const weightError = document.getElementById('weight-error');

    // 分类选择器
    const categorySelect = document.getElementById('category-select');
    const categorySearch = document.getElementById('category-search');
    const searchResults = document.getElementById('search-results');

    // 货币选择器
    const currencyCny = document.getElementById('currency-cny');
    const currencyKzt = document.getElementById('currency-kzt');

    // 开关标签元素
    const overseasToggleLabel = document.getElementById('overseas-toggle-label');
    const firstmileToggleLabel = document.getElementById('firstmile-toggle-label');
    const withdrawalFeeToggleLabel = document.getElementById('withdrawal-fee-toggle-label');
    const exchangeLossToggleLabel = document.getElementById('exchange-loss-toggle-label');
    const remittanceFeeToggleLabel = document.getElementById('remittance-fee-toggle-label');

    // 扁平化分类数据用于搜索
    let flatCategories = [];

    function flattenCategories(categories, level = 1, parentPath = "") {
        categories.forEach(cat => {
            const path = parentPath ? `${parentPath} > ${cat.name.zh}` : cat.name.zh;
            flatCategories.push({
                id: cat.id,
                name: cat.name,
                commission: cat.commission,
                level: level,
                path: path
            });
        });
        
    }

    flattenCategories(categories);

    // 初始化分类选择器
    function populateCategorySelect(selectElement, categories, placeholder) {
        // 保存当前选中的值
        const selectedValue = selectElement.value;

        selectElement.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = placeholder;
        defaultOption.dataset.commission = '';
        selectElement.appendChild(defaultOption);

        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.id;
            option.textContent = cat.name[currentLanguage];
            option.dataset.commission = cat.commission;
            selectElement.appendChild(option);
        });

        // 恢复选中的值
        if (selectedValue) {
            selectElement.value = selectedValue;
        }
    }

    // 填充商品分类
    populateCategorySelect(categorySelect, categories, currentLanguage === 'zh' ? '-- 请选择商品分类 --' : '-- Выберите категорию товара --');

    // 分类选择变化事件
    categorySelect.addEventListener('change', function () {
        const selectedOption = this.options[this.selectedIndex];
        currentCommission = parseFloat(selectedOption.dataset.commission) || 0.12;

        // 更新佣金显示
        const trans = window.translations[currentLanguage];
        commissionDisplay.textContent = trans.commissionLabel + (currentCommission * 100).toFixed(0) + '%';

        // 重新计算
        calculateAll();
    });

    // 分类搜索功能
    categorySearch.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        if (!searchTerm) {
            searchResults.style.display = 'none';
            return;
        }

        const results = flatCategories.filter(cat =>
            cat.name.zh.toLowerCase().includes(searchTerm) ||
            cat.name.ru.toLowerCase().includes(searchTerm)
        );

        if (results.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        searchResults.innerHTML = '';
        results.forEach(cat => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.textContent = currentLanguage === 'zh' ? cat.path : cat.name.ru;
            div.dataset.id = cat.id;
            div.dataset.commission = cat.commission;
            div.dataset.level = cat.level;
            searchResults.appendChild(div);
        });

        searchResults.style.display = 'block';
    });

    // 处理搜索结果选择
    searchResults.addEventListener('click', function (e) {
        if (e.target.classList.contains('search-result-item')) {
            const catId = e.target.dataset.id;
            const commission = e.target.dataset.commission;

            // 设置佣金率
            currentCommission = parseFloat(commission) || 0.12;

            // 更新佣金显示
            const trans = translations[currentLanguage];
            commissionDisplay.textContent = trans.commissionLabel + (currentCommission * 100).toFixed(0) + '%';

            // 查找并设置分类
            const foundCategory = flatCategories.find(cat => cat.id === catId);
            if (foundCategory) {
                categorySelect.value = catId;
            }

            categorySearch.value = '';
            searchResults.style.display = 'none';

            // 重新计算
            calculateAll();
        }
    });

    // 点击搜索图标聚焦搜索框
    document.querySelector('.search-icon').addEventListener('click', function () {
        categorySearch.focus();
    });

    // 语言切换功能
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const oldLanguage = currentLanguage;
            currentLanguage = this.dataset.lang;

            // 更新按钮状态
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 更新body类名
            document.body.className = '';
            document.body.classList.add(`lang-${currentLanguage}`);

            // 更新页面文本
            updateLanguage();

            // 转换货币值
            const rate = parseFloat(exchangeRate.value) || 70;

            // 需要转换的字段
            const fieldsToConvert = [
                purchasePrice,
                shippingCost,
                grossProfit, // 新增计划毛利的转换
                overseasUnitPrice,
                firstMileUnitPrice
            ];

            fieldsToConvert.forEach(field => {
                const value = parseFloat(field.value);
                if (!isNaN(value)) {
                    if (oldLanguage === 'zh' && currentLanguage === 'ru') {
                        // 人民币 → 坚戈
                        field.value = (value * rate).toFixed(2);
                    } else if (oldLanguage === 'ru' && currentLanguage === 'zh') {
                        // 坚戈 → 人民币
                        field.value = (value / rate).toFixed(2);
                    }
                }
            });

            // 初始化新语言的默认单价
            initializeDefaultPrices();

            // 更新支付方式选项
            if (currentLanguage === 'ru') {
                paymentMethod.innerHTML = '<option value="kaspi">Kaspi.kz</option>';
                currencyKzt.checked = true;
                currentCurrency = 'kzt';
            } else {
                // 恢复中文支付方式选项
                paymentMethod.innerHTML = `
                    <option value="publicToPublic">银行公对公</option>
                    <option value="publicToPrivate">银行公对私</option>
                    <option value="privateToPrivate">银行私对私</option>
                    <option value="wechat">微信</option>
                    <option value="alipay">支付宝</option>
                    <option value="kaspi">Kaspi.kz</option>
                `;
                currencyCny.checked = true;
                currentCurrency = 'cny';
            }

            // 重新计算
            calculateAll();
        });
    });

    // 货币切换功能
    document.querySelectorAll('.currency-radio').forEach(radio => {
        radio.addEventListener('change', function () {
            currentCurrency = this.value;
            calculateAll(); // 重新计算并显示结果
        });
    });

    // 更新页面语言
    function updateLanguage() {
        const trans = translations[currentLanguage];

        // 更新文本内容
        document.getElementById('company-name').textContent = trans.companyName;
        document.getElementById('app-title').textContent = trans.appTitle;
        document.getElementById('exchange-label').textContent = trans.exchangeLabel;
        document.getElementById('currency-label').textContent = trans.currencyLabel;
        document.getElementById('product-info-title').textContent = trans.productInfo;
        document.getElementById('category-label').textContent = trans.categoryLabel;
        document.getElementById('purchase-label').textContent = trans.purchaseLabel;
        document.getElementById('shipping-label').textContent = trans.shippingLabel;
        document.getElementById('gross-profit-label').textContent = trans.grossProfitLabel; // 修改为计划毛利
        document.getElementById('cashback-label').textContent = trans.cashbackLabel;
        document.getElementById('payment-label').textContent = trans.paymentLabel;
        document.getElementById('logistics-title').textContent = trans.logisticsTitle;
        document.getElementById('dimension-label').textContent = trans.dimensionLabel;
        document.getElementById('volume-label').textContent = trans.volumeLabel;
        document.getElementById('weight-label').textContent = trans.weightLabel;
        document.getElementById('kaspi-price-label').textContent = trans.kaspiPriceLabel;
        document.getElementById('fees-title').textContent = trans.feesTitle;
        document.getElementById('overseas-label').textContent = trans.overseasLabel;
        document.getElementById('firstmile-label').textContent = trans.firstmileLabel;
        document.getElementById('platform-title').textContent = trans.platformTitle;
        document.getElementById('cashback-amount-label').textContent = trans.cashbackAmountLabel;
        document.getElementById('kaspi-shipping-label').textContent = trans.kaspiShippingLabel;
        document.getElementById('platform-fee-label').textContent = trans.platformFeeLabel;
        document.getElementById('withdrawal-tax-label').textContent = trans.withdrawalTaxLabel;
        document.getElementById('return-title').textContent = trans.returnTitle;
        document.getElementById('withdrawal-fee-label').textContent = trans.withdrawalFeeLabel;
        document.getElementById('exchange-loss-label').textContent = trans.exchangeLossLabel;
        document.getElementById('remittance-fee-label').textContent = trans.remittanceFeeLabel;
        document.getElementById('return-amount-label').textContent = trans.returnAmountLabel;
        document.getElementById('kaspi-pay-label').textContent = trans.kaspiPayLabel;
        document.getElementById('estimated-amount-label').textContent = trans.estimatedAmountLabel;
        document.getElementById('profit-label-final').textContent = trans.profitLabelFinal;
        document.getElementById('copyright').textContent = trans.copyright;
        document.getElementById('cny-label').textContent = trans.cnyLabel;
        document.getElementById('kzt-label').textContent = trans.kztLabel;

        document.getElementById('kaspi-price-cny-label').textContent = trans.kaspiPriceCnyLabel;
        document.getElementById('kaspi-price-kzt-label').textContent = trans.kaspiPriceKztLabel;
        document.getElementById('overseas-unit-label').textContent = trans.overseasUnitLabel;
        document.getElementById('firstmile-unit-label').textContent = trans.firstmileUnitLabel;

        // 更新按钮文本
        calculateBtn.textContent = trans.calculateBtn;

        // 更新占位符文本
        categorySearch.placeholder = trans.categorySearchPlaceholder;
        purchasePrice.placeholder = trans.purchasePlaceholder;
        shippingCost.placeholder = trans.shippingPlaceholder;
        grossProfit.placeholder = trans.grossProfitPlaceholder; // 修改为计划毛利
        cashback.placeholder = trans.cashbackPlaceholder;
        weight.placeholder = trans.weightPlaceholder;
        length.placeholder = trans.lengthPlaceholder;
        width.placeholder = trans.widthPlaceholder;
        height.placeholder = trans.heightPlaceholder;
        exchangeRate.placeholder = trans.exchangePlaceholder;

        // 更新开关标签文本
        overseasToggleLabel.textContent = trans.overseasToggleLabel;
        firstmileToggleLabel.textContent = trans.firstmileToggleLabel;
        withdrawalFeeToggleLabel.textContent = trans.withdrawalFeeToggleLabel;
        exchangeLossToggleLabel.textContent = trans.exchangeLossToggleLabel;
        remittanceFeeToggleLabel.textContent = trans.remittanceFeeToggleLabel;

        // 更新分类选择框
        populateCategorySelect(categorySelect, categories, currentLanguage === 'zh' ? '-- 请选择商品分类 --' : '-- Выберите категорию товара --');

        // 更新佣金显示
        commissionDisplay.textContent = trans.commissionLabel + (currentCommission * 100).toFixed(0) + '%';
        
        // 更新历史记录区域文本
        document.getElementById('history-title').textContent = trans.historyTitle;
        exportHistoryBtn.textContent = trans.exportBtn;
        clearHistoryBtn.textContent = trans.clearBtn;
        
        // 重新渲染历史记录表格
        renderHistoryTable();
        
        // 更新联系文本
        updateContactText();
        
        // 更新广告标题
        document.getElementById('ad-title').textContent = trans.adTitle;
        
        // 更新免责声明
        document.getElementById('disclaimer-title').textContent = trans.disclaimerTitle;
        document.getElementById('disclaimer-content').innerHTML = 
            `<p>${trans.disclaimerText1}</p><p>${trans.disclaimerText2}</p>`;
    }
    
    // 更新联系文本的函数
    function updateContactText() {
        const trans = translations[currentLanguage];
        const contactSpan = document.querySelector('.contact-info span');
        if (contactSpan) {
            contactSpan.textContent = trans.contactLabel || "业务咨询：";
        }
        const contactLinkElem = document.getElementById('contact-link');
        if (contactLinkElem) {
            contactLinkElem.textContent = trans.contactLinkText || "点击联系客服";
        }
    }

    // 验证输入
    function validateInputs() {
        let isValid = true;

        // 隐藏所有错误消息
        exchangeError.style.display = 'none';
        purchaseError.style.display = 'none';
        shippingError.style.display = 'none';
        profitError.style.display = 'none';
        weightError.style.display = 'none';

        // 验证汇率
        const rate = parseFloat(exchangeRate.value);
        if (isNaN(rate)) {
            exchangeError.textContent = currentLanguage === 'zh' ? '请输入汇率' : 'Введите курс обмена';
            exchangeError.style.display = 'block';
            isValid = false;
        } else if (rate <= 0) {
            exchangeError.textContent = currentLanguage === 'zh' ? '汇率必须大于0' : 'Курс должен быть больше 0';
            exchangeError.style.display = 'block';
            isValid = false;
        }

        // 验证采购价
        const purchase = parseFloat(purchasePrice.value);
        if (isNaN(purchase) || purchase < 0) {
            purchaseError.textContent = currentLanguage === 'zh' ? '请输入有效的采购价' : 'Введите действительную закупочную цену';
            purchaseError.style.display = 'block';
            isValid = false;
        }

        // 验证运费
        const shipping = parseFloat(shippingCost.value);
        if (isNaN(shipping) || shipping < 0) {
            shippingError.textContent = currentLanguage === 'zh' ? '请输入有效的运费' : 'Введите действительную стоимость доставки';
            shippingError.style.display = 'block';
            isValid = false;
        }

        // 验证计划毛利
        const profitInput = parseFloat(grossProfit.value);
        if (isNaN(profitInput) || profitInput < 0) {
            profitError.textContent = currentLanguage === 'zh' ? '请输入有效的计划毛利' : 'Введите действительную плановую валовую прибыль';
            profitError.style.display = 'block';
            isValid = false;
        }

        // 验证重量
        const w = parseFloat(weight.value);
        if (isNaN(w) || w <= 0) {
            weightError.textContent = currentLanguage === 'zh' ? '请输入有效的重量' : 'Введите действительный вес';
            weightError.style.display = 'block';
            isValid = false;
        }

        return isValid;
    }

    // 计算体积
    function calculateVolume() {
        const l = parseFloat(length.value) || 0;
        const w = parseFloat(width.value) || 0;
        const h = parseFloat(height.value) || 0;

        if (l > 0 && w > 0 && h > 0) {
            const vol = (l / 100) * (w / 100) * (h / 100);
            volume.value = vol.toFixed(4) + ' m³';
            return vol;
        }

        volume.value = '';
        return 0;
    }

    // 初始化默认单价
    function initializeDefaultPrices() {
        const rate = parseFloat(exchangeRate.value) || 70;

        // 检查用户是否手动修改过值
        const overseasUserSet = overseasUnitPrice.dataset.userSet === 'true';
        const firstMileUserSet = firstMileUnitPrice.dataset.userSet === 'true';

        // 中文界面：显示坚戈值除以汇率（人民币值）
        if (currentLanguage === 'zh') {
            if (!overseasUserSet) {
                overseasUnitPrice.value = (1000 / rate).toFixed(2);
            }
            if (!firstMileUserSet) {
                firstMileUnitPrice.value = (100 / rate).toFixed(2);
            }
        }
        // 俄语界面：直接显示坚戈值
        else {
            if (!overseasUserSet) {
                overseasUnitPrice.value = "1000";
            }
            if (!firstMileUserSet) {
                firstMileUnitPrice.value = "100";
            }
        }
    }

    // 计算所有费用并显示结果
    function calculateAll() {
        // 验证输入
        if (!validateInputs()) {
            return;
        }

        // 获取输入值
        const rate = parseFloat(exchangeRate.value);
        const purchase = parseFloat(purchasePrice.value) || 0;
        const shipping = parseFloat(shippingCost.value) || 0;
        const grossProfitInput = parseFloat(grossProfit.value) || 0; // 计划毛利
        const cb = parseFloat(cashback.value) || 0;
        const w = parseFloat(weight.value) || 0;
        const vol = calculateVolume();
        const cat = currentCommission;

        // 获取费用单价（根据语言转换为人民币）
        let overseasUnit, firstMileUnit;
        if (currentLanguage === 'zh') {
            // 中文界面：用户输入的是人民币
            overseasUnit = parseFloat(overseasUnitPrice.value) || 0;
            firstMileUnit = parseFloat(firstMileUnitPrice.value) || 0;
        } else {
            // 俄语界面：用户输入的是坚戈，转换为人民币
            overseasUnit = (parseFloat(overseasUnitPrice.value) || 0) / rate;
            firstMileUnit = (parseFloat(firstMileUnitPrice.value) || 0) / rate;
        }

        // 计算Kaspi售价（人民币） - 使用计划毛利
        let kaspiPriceCnyValue;
        if (currentLanguage === 'ru') {
            // 俄语界面：采购价和运费是坚戈，计划毛利也是坚戈
            kaspiPriceCnyValue = (purchase + shipping + grossProfitInput) / rate;
        } else {
            // 中文界面：采购价和运费是人民币，计划毛利也是人民币
            kaspiPriceCnyValue = purchase + shipping + grossProfitInput;
        }

        // 计算Kaspi售价（坚戈）
        const kaspiPriceKztValue = kaspiPriceCnyValue * rate;

        // 更新双列Kaspi售价显示
        kaspiPriceCny.value = kaspiPriceCnyValue.toFixed(2) + '¥';
        kaspiPriceKzt.value = kaspiPriceKztValue.toFixed(2) + '₸';

        // 海外仓费用计算
        let overseasValue = 0;
        if (overseasToggle.checked && vol > 0) {
            if (vol <= 1) {
                overseasValue = overseasUnit;
            } else {
                overseasValue = Math.ceil(vol) * overseasUnit;
            }
        }

        // 头程费用计算
        let firstMileValue = 0;
        if (firstMileToggle.checked && vol > 0) {
            if (vol <= 0.01) {
                firstMileValue = firstMileUnit;
            } else {
                firstMileValue = vol * 100 * firstMileUnit;
            }
        }

        // 4. 计算下单返利（人民币）
        const cashbackValue = (cb / 100 * kaspiPriceKztValue) / rate;

        // 5. 计算Kaspi运费（人民币）
        let kaspiShippingValue = 0;
        if (kaspiPriceKztValue > 0) {
            if (kaspiPriceKztValue < 5000) {
                kaspiShippingValue = 0;
            } else if (kaspiPriceKztValue <= 15000) {
                kaspiShippingValue = 799 / rate;
            } else {
                if (w < 5) {
                    kaspiShippingValue = 1299 / rate;
                } else if (w <= 15) {
                    kaspiShippingValue = 1699 / rate;
                } else if (w <= 50) {
                    kaspiShippingValue = 3599 / rate;
                } else {
                    kaspiShippingValue = 6499 / rate;
                }
            }
        }

        // 6. 计算平台佣金（人民币）
        const platformFeeValue = (kaspiPriceKztValue * cat) / rate;

        // 7. 计算提现税（4%）（人民币）
        const baseAmount = kaspiPriceKztValue / rate;
        const withdrawalTaxValue = (baseAmount - cashbackValue - kaspiShippingValue - platformFeeValue) * 0.04;

        // 8. 计算Kaspi pay提现到账金额（人民币）
        const kaspiPayAmountValue = baseAmount - cashbackValue - kaspiShippingValue - platformFeeValue - withdrawalTaxValue;

        // 9. 计算提现手续费（1%）（人民币） - 考虑开关状态
        let withdrawalFeeValue = 0;
        if (withdrawalFeeToggle.checked) {
            withdrawalFeeValue = kaspiPayAmountValue * 0.01;
        }

        // 10. 计算回款金额（人民币）
        const returnAmountValue = kaspiPayAmountValue - withdrawalFeeValue - overseasValue - firstMileValue;

        // 11. 计算汇损（1.42%）（人民币） - 考虑开关状态
        let exchangeLossValue = 0;
        if (exchangeLossToggle.checked) {
            exchangeLossValue = returnAmountValue * 0.0142;
        }

        // 12. 计算汇款手续费（人民币） - 考虑开关状态
        let remittanceFeeValue = 0;
        if (remittanceFeeToggle.checked && returnAmountValue > 0) {
            const method = paymentMethod.value;
            switch (method) {
                case 'publicToPublic':
                    if (returnAmountValue <= 10000) {
                        remittanceFeeValue = 5;
                    } else if (returnAmountValue <= 100000) {
                        remittanceFeeValue = 10;
                    } else if (returnAmountValue <= 500000) {
                        remittanceFeeValue = 15;
                    } else if (returnAmountValue <= 1000000) {
                        remittanceFeeValue = 20;
                    } else {
                        remittanceFeeValue = Math.min(200, Math.ceil(returnAmountValue * 0.00002 * 100) / 100);
                    }
                    break;
                case 'publicToPrivate':
                    if (returnAmountValue <= 10000) {
                        remittanceFeeValue = 5;
                    } else if (returnAmountValue <= 100000) {
                        remittanceFeeValue = 10;
                    } else if (returnAmountValue <= 500000) {
                        remittanceFeeValue = 15;
                    } else if (returnAmountValue <= 1000000) {
                        remittanceFeeValue = 20;
                    } else {
                        remittanceFeeValue = Math.min(200, Math.ceil(returnAmountValue * 0.00002 * 100) / 100);
                    }
                    break;
                case 'privateToPrivate':
                    if (returnAmountValue <= 5000) {
                        remittanceFeeValue = 0;
                    } else if (returnAmountValue <= 10000) {
                        remittanceFeeValue = 5;
                    } else if (returnAmountValue <= 50000) {
                        remittanceFeeValue = 7.5;
                    } else {
                        remittanceFeeValue = Math.min(25, Math.ceil(returnAmountValue * 0.00015 * 100) / 100);
                    }
                    break;
                case 'wechat':
                    remittanceFeeValue = Math.max(0.1, Math.ceil(returnAmountValue * 0.001 * 100) / 100);
                    break;
                case 'alipay':
                    remittanceFeeValue = Math.max(0.1, Math.ceil(returnAmountValue * 0.001 * 100) / 100);
                    break;
                case 'kaspi':
                    remittanceFeeValue = 0;
                    break;
                default:
                    remittanceFeeValue = 0;
            }
        }

        // 13. 计算预估到账金额（人民币）
        const estimatedAmountValue = returnAmountValue - exchangeLossValue - remittanceFeeValue;

        // 14. 计算利润
        let profitValue;
        if (currentLanguage === 'ru') {
            // 俄语界面:输入值是坚戈,需要转换为人民币
            const purchaseInCNY = purchase / rate;
            const shippingInCNY = shipping / rate;
            const grossProfitInCNY = grossProfitInput / rate;
            profitValue = estimatedAmountValue - purchaseInCNY - shippingInCNY;
        } else {
            // 中文界面:输入值已经是人民币
            profitValue = estimatedAmountValue - purchase - shipping;
        }

        // 显示结果时的货币转换
        const currencyRate = currentCurrency === 'kzt' ? rate : 1;
        const currencySymbol = currentCurrency === 'kzt' ? '₸' : '¥';

        // 更新显示结果
        overseasWarehouse.value = (overseasValue * currencyRate).toFixed(2) + currencySymbol;
        firstMile.value = (firstMileValue * currencyRate).toFixed(2) + currencySymbol;
        cashbackAmount.value = (cashbackValue * currencyRate).toFixed(2) + currencySymbol;
        kaspiShipping.value = (kaspiShippingValue * currencyRate).toFixed(2) + currencySymbol;
        platformFee.value = (platformFeeValue * currencyRate).toFixed(2) + currencySymbol;
        withdrawalTax.value = (withdrawalTaxValue * currencyRate).toFixed(2) + currencySymbol;
        withdrawalFee.value = (withdrawalFeeValue * currencyRate).toFixed(2) + currencySymbol;
        exchangeLoss.value = (exchangeLossValue * currencyRate).toFixed(2) + currencySymbol;
        remittanceFee.value = (remittanceFeeValue * currencyRate).toFixed(2) + currencySymbol;
        kaspiPayAmount.textContent = (kaspiPayAmountValue * currencyRate).toFixed(2) + currencySymbol;
        returnAmountDisplay.textContent = (returnAmountValue * currencyRate).toFixed(2) + currencySymbol;
        estimatedAmount.textContent = (estimatedAmountValue * currencyRate).toFixed(2) + currencySymbol;
        profit.textContent = (profitValue * currencyRate).toFixed(2) + currencySymbol;

        // 根据利润值设置颜色和类
        profit.classList.remove('negative');
        if (profitValue > 0) {
            profit.style.color = '#27ae60';
        } else if (profitValue < 0) {
            profit.style.color = '#c0392b';
            profit.classList.add('negative');
        } else {
            profit.style.color = '#e65100';
        }

        // 更新开关标签状态
        updateToggleLabels();

        // 在计算完成后，添加历史记录
        addHistoryRecord();
    }

    // 添加历史记录函数
    function addHistoryRecord() {
        // 收集所有需要记录的数据
        const trans = translations[currentLanguage];
        const record = {
            timestamp: new Date().toLocaleString(),
            category: categorySelect.options[categorySelect.selectedIndex].text,
            purchasePrice: purchasePrice.value,
            shippingCost: shippingCost.value,
            grossProfit: grossProfit.value,
            cashback: cashback.value,
            paymentMethod: paymentMethod.options[paymentMethod.selectedIndex].text,
            dimensions: `${length.value || 0}×${width.value || 0}×${height.value || 0}`,
            volume: volume.value,
            weight: weight.value,
            overseasWarehouse: overseasWarehouse.value,
            firstMile: firstMile.value,
            cashbackAmount: cashbackAmount.value,
            kaspiShipping: kaspiShipping.value,
            platformFee: platformFee.value,
            withdrawalTax: withdrawalTax.value,
            withdrawalFee: withdrawalFee.value,
            exchangeLoss: exchangeLoss.value,
            remittanceFee: remittanceFee.value,
            kaspiPayAmount: kaspiPayAmount.textContent,
            returnAmount: returnAmountDisplay.textContent,
            estimatedAmount: estimatedAmount.textContent,
            profit: profit.textContent,
            currency: currentCurrency === 'cny' ? trans.cnyLabel : trans.kztLabel
        };
        
        // 添加到历史记录数组
        historyRecords.push(record);
        
        // 渲染表格
        renderHistoryTable();
    }
    
    // 渲染历史记录表格
    function renderHistoryTable() {
        const trans = translations[currentLanguage];
        historyTableBody.innerHTML = '';
        
        // 更新表头翻译
        const headerRow = document.querySelector('#historyTable thead tr');
        if (headerRow) {
            headerRow.innerHTML = '';
            trans.historyTableHeaders.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });
        }
        
        historyRecords.forEach((record, index) => {
            const row = document.createElement('tr');
            
            // 添加数据单元格
            row.innerHTML = `
                <td>${record.category}</td>
                <td>${record.purchasePrice}</td>
                <td>${record.shippingCost}</td>
                <td>${record.grossProfit}</td>
                <td>${record.cashback}</td>
                <td>${record.paymentMethod}</td>
                <td>${record.dimensions}</td>
                <td>${record.volume}</td>
                <td>${record.weight}</td>
                <td>${record.overseasWarehouse}</td>
                <td>${record.firstMile}</td>
                <td>${record.cashbackAmount}</td>
                <td>${record.kaspiShipping}</td>
                <td>${record.platformFee}</td>
                <td>${record.withdrawalTax}</td>
                <td>${record.withdrawalFee}</td>
                <td>${record.exchangeLoss}</td>
                <td>${record.remittanceFee}</td>
                <td>${record.kaspiPayAmount}</td>
                <td>${record.returnAmount}</td>
                <td>${record.estimatedAmount}</td>
                <td>${record.profit}</td>
                <td>${record.currency}</td>
                <td><button class="delete-btn" data-index="${index}">${trans.deleteBtn || '删除'}</button></td>
            `;
            
            historyTableBody.appendChild(row);
        });
        
        // 添加删除按钮事件监听
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                deleteHistoryRecord(index);
            });
        });
    }
    
    // 删除历史记录
    function deleteHistoryRecord(index) {
        historyRecords.splice(index, 1);
        renderHistoryTable();
    }
    
    // 导出历史记录为CSV
    function exportHistoryToCSV() {
        const trans = translations[currentLanguage];
        if (historyRecords.length === 0) {
            alert(trans.historyTitle + ' ' + (currentLanguage === 'zh' ? '为空' : 'пуста'));
            return;
        }
        
        // 创建CSV标题行
        let csvContent = trans.historyTableHeaders.join(',') + '\n';
        
        // 添加数据行
        historyRecords.forEach(record => {
            const row = [
                record.category,
                record.purchasePrice,
                record.shippingCost,
                record.grossProfit,
                record.cashback,
                record.paymentMethod,
                record.dimensions,
                record.volume,
                record.weight,
                record.overseasWarehouse,
                record.firstMile,
                record.cashbackAmount,
                record.kaspiShipping,
                record.platformFee,
                record.withdrawalTax,
                record.withdrawalFee,
                record.exchangeLoss,
                record.remittanceFee,
                record.kaspiPayAmount,
                record.returnAmount,
                record.estimatedAmount,
                record.profit,
                record.currency,
                record.timestamp
            ];
            csvContent += row.map(field => `"${field}"`).join(',') + '\n';
        });
        
        // 创建下载链接
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        
        link.setAttribute('href', url);
        link.setAttribute('download', `kaspi_history_${timestamp}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    // 清空历史记录
    function clearHistory() {
        const trans = translations[currentLanguage];
        if (confirm(currentLanguage === 'zh' ? '确定要清空所有历史记录吗？' : 'Вы уверены, что хотите очистить всю историю?')) {
            historyRecords = [];
            renderHistoryTable();
        }
    }
    
    // 添加事件监听器
    exportHistoryBtn.addEventListener('click', exportHistoryToCSV);
    clearHistoryBtn.addEventListener('click', clearHistory);

    // 更新开关标签状态
    function updateToggleLabels() {
        const toggles = [
            { toggle: overseasToggle, label: document.querySelector('#overseas-label') },
            { toggle: firstMileToggle, label: document.querySelector('#firstmile-label') },
            { toggle: withdrawalFeeToggle, label: document.querySelector('#withdrawal-fee-label') },
            { toggle: exchangeLossToggle, label: document.querySelector('#exchange-loss-label') },
            { toggle: remittanceFeeToggle, label: document.querySelector('#remittance-fee-label') }
        ];

        toggles.forEach(item => {
            if (item.toggle.checked) {
                item.label.classList.remove('toggle-off');
            } else {
                item.label.classList.add('toggle-off');
            }
        });
    }

    // 添加事件监听器
    calculateBtn.addEventListener('click', calculateAll);

    // 开关变化时重新计算
    overseasToggle.addEventListener('change', calculateAll);
    firstMileToggle.addEventListener('change', calculateAll);
    withdrawalFeeToggle.addEventListener('change', calculateAll);
    exchangeLossToggle.addEventListener('change', calculateAll);
    remittanceFeeToggle.addEventListener('change', calculateAll);

    // 费用单价变化时重新计算
    overseasUnitPrice.addEventListener('input', function () {
        this.dataset.userSet = 'true';
        calculateAll();
    });
    firstMileUnitPrice.addEventListener('input', function () {
        this.dataset.userSet = 'true';
        calculateAll();
    });

    // 尺寸变化时自动计算体积
    length.addEventListener('input', calculateVolume);
    width.addEventListener('input', calculateVolume);
    height.addEventListener('input', calculateVolume);

    // 输入变化时隐藏错误消息
    exchangeRate.addEventListener('input', function () {
        exchangeError.style.display = 'none';
        // 汇率变化时更新默认单价
        initializeDefaultPrices();
        calculateAll();
    });
    purchasePrice.addEventListener('input', () => purchaseError.style.display = 'none');
    shippingCost.addEventListener('input', () => shippingError.style.display = 'none');
    grossProfit.addEventListener('input', () => profitError.style.display = 'none'); // 计划毛利
    weight.addEventListener('input', () => weightError.style.display = 'none');
    
    // 新增弹窗功能代码
    const modal = document.getElementById('contactModal');
    const contactLink = document.getElementById('contact-link');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');
    
    // 点击联系链接显示弹窗
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (currentLanguage === 'zh') {
                // 中文显示联系方式图片
                modalBody.innerHTML = `
                    <h3>联系我们</h3>
                    <p>业务咨询请通过以下方式联系：</p>
                    <img src="lxfs.jpg" alt="联系方式">
                    <p>扫描二维码或保存图片联系客服</p>
                `;
            } else {
                // 俄语显示WhatsApp号码
                modalBody.innerHTML = `
                    <h3>Свяжитесь с нами</h3>
                    <p>Для консультации по вопросам бизнеса:</p>
                    <div class="whatsapp-contact">
                        <p><strong>WhatsApp:</strong></p>
                        <p class="phone-number">+7 (705) 911-91-43</p>
                    </div>
                    <p>Рабочее время: Пн-Пт, 9:00-18:00</p>
                `;
            }
            
            modal.style.display = 'block';
        });
    }
    
    // 关闭弹窗
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // 点击弹窗外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 初始化页面
    function initializePage() {
        updateLanguage();
        initializeDefaultPrices();
        calculateVolume();
        calculateAll();
        updateContactText(); // 初始化联系文本
    }

    // 立即检查解锁状态
    const checkUnlockStatus = () => {
        const key = localStorage.getItem('unlockKey');
        const expiry = localStorage.getItem('unlockExpiry');
        
        if (key && expiry) {
            const remaining = parseInt(expiry) - Date.now();
            if (remaining > 0) {
                document.getElementById('countdownContainer').style.display = 'block';
                startCountdown(remaining);
                return true;
            }
        }
        return false;
    };

    // 优先尝试直接初始化
    if (!checkUnlockStatus() && localStorage.getItem('unlockKey')) {
        // 作为后备方案自动刷新
        if (!sessionStorage.getItem('alreadyRefreshed')) {
            sessionStorage.setItem('alreadyRefreshed', 'true');
            setTimeout(() => location.reload(), 100);
        }
    }

    // 正常初始化页面
    initializePage();
    
    // 添加独立的倒计时检查逻辑
    const checkAndStartCountdown = () => {
        const expiry = localStorage.getItem('unlockExpiry');
        if (expiry) {
            const remaining = parseInt(expiry) - Date.now();
            if (remaining > 0) {
                document.getElementById('countdownContainer').style.display = 'block';
                startCountdown(remaining);
            }
        }
    };
    
    // 增强版初始化检查
    function enhancedCountdownInit() {
        const expiry = localStorage.getItem('unlockExpiry');
        const countdownEl = document.getElementById('countdown');
        
        if (expiry) {
            const remaining = parseInt(expiry) - Date.now();
            if (remaining > 0) {
                document.getElementById('countdownContainer').style.display = 'block';
                startCountdown(remaining);
                return;
            }
        }
        // 未解锁或已过期状态
        countdownEl.textContent = '服务有效期: 未激活';
    }
    
    // 初始执行
    enhancedCountdownInit();
    
    // 每隔1分钟检查一次（更频繁的检查）
    setInterval(enhancedCountdownInit, 60 * 1000);

    // 密钥验证功能（增强版）
    function validateKey() {
        const keyInput = document.getElementById('key-input').value;
        console.log('正在验证密钥...'); // 调试日志
        
        fetch('./validate_key', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: keyInput })
        })
        .then(response => response.json())
        .then(result => {
            console.log('验证结果:', result); // 调试日志
            if (result.valid) {
                // 显示主界面
                document.getElementById('blurOverlay').style.display = 'none';
                
                // 确保倒计时容器存在且可见
                const countdownContainer = document.getElementById('countdownContainer');
                if (!countdownContainer) {
                    console.error('倒计时容器未找到');
                    return;
                }
                countdownContainer.style.display = 'block';
                console.log('倒计时容器已显示'); // 调试日志
                
                // 无论剩余时间多少都启动倒计时
                if (result.expiry) {
                    const remainingTime = result.expiry - Date.now();
                    console.log('剩余时间(ms):', remainingTime); // 调试日志
                    startCountdown(remainingTime);
                } else {
                    console.warn('接口未返回有效期');
                    document.getElementById('countdown').textContent = '服务有效期: 未知';
                }
                
                // 存储密钥信息
                localStorage.setItem('unlockKey', keyInput);
                localStorage.setItem('unlockExpiry', result.expiry);
                
            } else {
                alert(result.message || '密钥验证失败');
            }
        })
        .catch(error => {
            console.error('验证失败:', error);
            alert('验证服务不可用');
        });
    }

    // 修复版倒计时函数 (全局可用)
    window.startCountdown = function(remainingTime) {
        console.log('启动倒计时，剩余时间:', remainingTime);
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) {
            console.error('倒计时元素未找到');
            return;
        }

        // 立即更新一次显示
        updateCountdown();
        
        // 启动定时器
        const interval = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            console.log('更新倒计时，剩余:', remainingTime);
            
            // 计算时间单位
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            
            // 更新显示
            countdownElement.innerHTML = `
                <span style="font-weight:bold;color:#d35400">服务剩余时间:</span>
                ${days}天 ${hours}小时 ${minutes}分 ${seconds}秒
            `;
            
            // 检查是否结束
            if (remainingTime <= 0) {
                clearInterval(interval);
                countdownElement.textContent = '服务已过期';
                console.log('倒计时结束');
                return;
            }
            
            // 减少剩余时间
            remainingTime -= 1000;
        }
    };

    function startCountdown(remainingTime) {
        const countdownElement = document.getElementById('countdown');
        const interval = setInterval(() => {
            remainingTime -= 1000;
            if (remainingTime <= 0) {
                clearInterval(interval);
                countdownElement.innerHTML = '密钥已过期';
                return;
            }
            
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `剩余时间: ${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
        }, 1000);
    }
});