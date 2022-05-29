export const If = props => {

    let ifChildren = props.children;
    let elseChild;

    if (props.children.length) {
        elseChild = props.children.filter(child => child.type && child.type.name === "Else")[0];
        ifChildren = props.children.filter(child => child.type === undefined || child.type.name !== "Else")
    }

    if (props.test)
        return ifChildren;
    else if (elseChild)
        return elseChild;
    else
        return false;
}

export const Else = props => {
    return props?.children
}
