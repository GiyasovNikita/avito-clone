const categories = {
    Недвижимость: [
        {
            label: "Тип недвижимости",
            name: "propertyType",
            type: "select",
            required: true,
            options: ["Квартира", "Дом", "Коммерческая недвижимость"]
        },
        {label: "Площадь (м²)", name: "area", type: "number", required: true, min: 1},
        {label: "Количество комнат", name: "rooms", type: "number", required: true, min: 1},
        {label: "Цена (₽)", name: "price", type: "number", required: true, min: 1}
    ],
    Авто: [
        {label: "Марка", name: "brand", type: "text", required: true},
        {label: "Модель", name: "model", type: "text", required: true},
        {label: "Год выпуска", name: "year", type: "number", required: true, min: 1900},
        {label: "Пробег (км)", name: "mileage", type: "number", required: false, min: 0}
    ],
    Услуги: [
        {
            label: "Тип услуги",
            name: "serviceType",
            type: "select",
            required: true,
            options: ["Ремонт", "Обучение", "Консультация"]
        },
        {label: "Опыт работы (лет)", name: "experience", type: "number", required: true, min: 1},
        {label: "Стоимость (₽)", name: "cost", type: "number", required: true, min: 1},
        {label: "График работы", name: "workSchedule", type: "custom", required: false}
    ]
};

export default categories;
