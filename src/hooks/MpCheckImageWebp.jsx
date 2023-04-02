function MpCheckImageWebp() {
    const elem = document.createElement('canvas');
    return elem.getContext && elem.getContext('2d') && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

export default MpCheckImageWebp;
