import { colors } from "../../theme/colors"
import { typography } from "../../theme/typography"

const BASE = {
    fontFamily:typography.primary,
    fontSize:16,
    color: '#2D0C57'
}

const BASE_BOLD={
    fontFamily:typography.primaryBold,
    fontSize:16,
    color: colors.white
}

const BOLD ={
    fontFamily:typography.bold,
    color: colors.white
}

export const presets = {
    default:BASE,
    bold:BOLD,
    h1:{
        ...BASE_BOLD,
        fontSize:34,
        color: colors.textColor

    },
    h2:{
        ...BOLD,
        fontSize:30,
        color: colors.textColor
    },
    h3:{
        ...BASE,
        fontSize:24,
        color: colors.textColor
    },
    h4:{
        ...BASE_BOLD,
        fontSize:15
    },
    small:{
        ...BASE,
        fontSize:12
    }
}