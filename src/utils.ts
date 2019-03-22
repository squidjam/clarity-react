/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

export type ReactChildren = (React.ReactNode) | (React.ReactNode[] & React.ReactNode);

export function classNames(classNameList: (false | undefined | null | string)[]) {
    return classNameList.filter(x => typeof x === "string").join(" ");
}

export function isInTreeDOM(rootEl: Node, clicked: Node): boolean {
    while (clicked !== rootEl && clicked !== document.body && clicked !== null) {
        clicked = clicked.parentNode!;
    }

    return clicked === rootEl;
}
