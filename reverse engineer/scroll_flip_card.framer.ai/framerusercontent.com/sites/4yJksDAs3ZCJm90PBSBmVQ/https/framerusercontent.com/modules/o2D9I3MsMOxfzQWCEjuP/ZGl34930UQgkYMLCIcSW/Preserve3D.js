import{jsx as _jsx}from"react/jsx-runtime";import{forwardRef}from"react";// Preserve 3D override
export function withPreserve3D(Component){return /*#__PURE__*/forwardRef((props,ref)=>{return /*#__PURE__*/_jsx(Component,{ref:ref,...props,style:{...props.style||{},transformStyle:"preserve-3d",WebkitTransformStyle:"preserve-3d"}});});}
export const __FramerMetadata__ = {"exports":{"withPreserve3D":{"type":"reactHoc","name":"withPreserve3D","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Preserve3D.map