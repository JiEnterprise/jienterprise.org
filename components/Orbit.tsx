/** Fig. 01 — Group structure. The orbit constellation from the hero. */
export default function Orbit() {
  return (
    <div className="orbit-wrap reveal" data-delay="2" aria-hidden="true">
      <svg className="orbit-svg" viewBox="0 0 600 600">
        <circle className="orbit-ring" cx="300" cy="300" r="210" />
        <line className="orbit-spoke" x1="300" y1="300" x2="300" y2="90" />
        <line className="orbit-spoke" x1="300" y1="300" x2="499.7" y2="235.1" />
        <line className="orbit-spoke" x1="300" y1="300" x2="423.4" y2="469.9" />
        <line className="orbit-spoke" x1="300" y1="300" x2="176.6" y2="469.9" />
        <line className="orbit-spoke" x1="300" y1="300" x2="100.3" y2="235.1" />

        <g>
          <g className="node" transform="translate(300,90)">
            <g className="float" style={{ animationDelay: '0s' }}>
              <circle className="face" r="38" />
              <text className="code" y="5">
                OPL
              </text>
              <text className="tag" y="62">
                Oplo Cloud
              </text>
            </g>
          </g>
          <g className="node" transform="translate(499.7,235.1)">
            <g className="float" style={{ animationDelay: '-1.4s' }}>
              <circle className="face" r="38" />
              <text className="code" y="5">
                AGL
              </text>
              <text className="tag" y="62">
                AurumGlobal
              </text>
            </g>
          </g>
          <g className="node" transform="translate(423.4,469.9)">
            <g className="float" style={{ animationDelay: '-2.8s' }}>
              <circle className="face" r="38" />
              <text className="code" y="5">
                JIS
              </text>
              <text className="tag" y="62">
                Ji Schools
              </text>
            </g>
          </g>
          <g className="node" transform="translate(176.6,469.9)">
            <g className="float" style={{ animationDelay: '-4.2s' }}>
              <circle className="face" r="38" />
              <text className="code" y="5">
                JRD
              </text>
              <text className="tag" y="62">
                JIERD
              </text>
            </g>
          </g>
          <g className="node res" transform="translate(100.3,235.1)">
            <g className="float" style={{ animationDelay: '-5.6s' }}>
              <circle className="face" r="38" />
              <text className="code" y="5">
                RES
              </text>
              <text className="tag" y="62">
                Reserved
              </text>
            </g>
          </g>
        </g>

        <circle className="core-pulse" cx="300" cy="300" r="64" />
        <g className="core">
          <circle cx="300" cy="300" r="64" />
          <text x="300" y="303">
            JI
          </text>
          <text className="sub" x="300" y="326" textAnchor="middle">
            HOLDING
          </text>
        </g>
      </svg>
      <div className="orbit-caption">Fig. 01 — Group structure</div>
    </div>
  );
}
