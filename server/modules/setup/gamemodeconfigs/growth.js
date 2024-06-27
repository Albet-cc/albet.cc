module.exports = {
    LEVEL_CAP: 123123123,
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        if (level % 5 == 1 && level < 51) return 1;
        if (level % 6 == 1 && level < 150) return 1;
        if (level % 9 == 1 && level < 200) return 1;
        if (level % 18 == 1 && level < 300) return 1;
        if (level % 24 == 1 && level < 400) return 1;
        if (level % 48 == 1 && level < 1000) return 1;

        return 0;
    },
};