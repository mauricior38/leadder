import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Leadder — BPO Financeiro';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    background: 'linear-gradient(135deg, #202741 0%, #181d33 60%, #2a3352 100%)',
                    padding: '80px',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        border: '2px solid rgba(185, 161, 107, 0.15)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-150px',
                        right: '100px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        border: '2px solid rgba(185, 161, 107, 0.1)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '60px',
                        right: '80px',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'rgba(185, 161, 107, 0.08)',
                        display: 'flex',
                    }}
                />

                {/* Crown icon */}
                <div
                    style={{
                        display: 'flex',
                        marginBottom: '20px',
                    }}
                >
                    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                        <path d="M5 35L15 10L30 25L45 10L55 35H5Z" fill="#b9a16b" />
                        <path d="M5 35H55V40H5V35Z" fill="#b9a16b" />
                    </svg>
                </div>

                {/* Brand name */}
                <div
                    style={{
                        fontSize: '72px',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '-1px',
                        display: 'flex',
                    }}
                >
                    leadder
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#b9a16b',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        marginTop: '4px',
                        display: 'flex',
                    }}
                >
                    GESTÃO FINANCEIRA
                </div>

                {/* Divider */}
                <div
                    style={{
                        width: '80px',
                        height: '3px',
                        background: '#b9a16b',
                        marginTop: '32px',
                        marginBottom: '32px',
                        display: 'flex',
                    }}
                />

                {/* Tagline */}
                <div
                    style={{
                        fontSize: '28px',
                        fontWeight: 400,
                        color: 'rgba(255, 255, 255, 0.75)',
                        lineHeight: 1.5,
                        maxWidth: '600px',
                        display: 'flex',
                    }}
                >
                    Sua gestão financeira descomplicada. BPO Financeiro de excelência.
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '6px',
                        background: 'linear-gradient(90deg, #b9a16b, #d4c48e, #b9a16b)',
                        display: 'flex',
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
