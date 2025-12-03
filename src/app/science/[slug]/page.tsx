import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function ScienceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

    // Real content based on topic
    const getContent = (topic: string) => {
        switch (slug) {
            case 'pid-controllers':
                return {
                    intro: 'PID (Proportional-Integral-Derivative) controllers are the backbone of drone flight stability. They continuously calculate error values and apply corrections to keep your drone flying smoothly.',
                    sections: [
                        {
                            title: 'The Physics',
                            content: `At its core, a PID controller uses three components to maintain stability:

**Proportional (P):** Reacts to current error. If your drone tilts 10 degrees, P tries to correct proportionally - the bigger the tilt, the stronger the correction.

**Integral (I):** Addresses accumulated past errors. If your drone consistently drifts in one direction due to wind, I eliminates this steady-state error over time.

**Derivative (D):** Predicts future errors based on rate of change. It dampens oscillations by resisting rapid changes, preventing overshooting.

The magic happens when these three work together: P provides immediate response, I eliminates persistent drift, and D prevents wild oscillations.`
                        },
                        {
                            title: 'Mathematical Model',
                            content: `The PID algorithm can be expressed as:

\`\`\`
output(t) = Kp × e(t) + Ki × ∫e(τ)dτ + Kd × de(t)/dt
\`\`\`

Where:
- **e(t)** = error (difference between desired and actual state)
- **Kp, Ki, Kd** = tuning gains for each component
- **∫e(τ)dτ** = integral of error over time
- **de(t)/dt** = rate of change of error

In practical drone flight controller code, this is implemented discretely:

\`\`\`c
error = setpoint - measured_value
integral = integral + (error * dt)
derivative = (error - previous_error) / dt
output = (Kp * error) + (Ki * integral) + (Kd * derivative)
previous_error = error
\`\`\``
                        },
                        {
                            title: 'Tuning for Your Drone',
                            content: `Getting the right PID values is crucial:

**Start with P:** Increase until drone responds quickly but oscillates
**Add D:** Increase to dampen oscillations and smooth flight
**Fine-tune I:** Add slowly to eliminate drift without causing lag

Too much P = violent oscillations
Too much I = sluggish response and overshoot  
Too much D = resistance to stick inputs, jerky flight

Modern flight controllers like Betaflight use PID loops running at 8kHz or higher for incredibly smooth flight.`
                        }
                    ]
                }
            case 'battery-chemistry':
                return {
                    intro: 'LiPo (Lithium Polymer) batteries power most drones. Understanding their chemistry, C-ratings, and voltage behavior is critical for safe flying and maximum performance.',
                    sections: [
                        {
                            title: 'How LiPo Batteries Work',
                            content: `LiPo batteries store energy through lithium-ion movement between electrodes:

**Nominal Voltage:** 3.7V per cell (fully charged: 4.2V, depleted: 3.0V)
**Common Configurations:** 
- 3S = 11.1V (racing drones)
- 4S = 14.8V (high performance)
- 6S = 22.2V (maximum power)

The voltage sag during flight is normal - high current draw causes temporary voltage drop. A 4S battery under load might drop from 16.8V to 14.5V, which is why flight time estimates use average voltage.`
                        },
                        {
                            title: 'Understanding C-Ratings',
                            content: `The C-rating tells you maximum safe discharge rate:

**Formula:** Max Current = Capacity (Ah) × C-Rating

Example: A 1500mAh 75C battery can safely deliver:
1.5Ah × 75 = 112.5A continuous

Higher C-ratings mean:
✓ Less voltage sag under load
✓ Longer cycle life when not maxed out
✓ Better performance for high-power setups

But also:
✗ Higher cost
✗ More weight
✗ Manufacturers sometimes exaggerate ratings`
                        }
                    ]
                }
            case 'physics-of-flight':
                return {
                    intro: 'Understanding the fundamental physics and mathematics that enable controlled drone flight, from aerodynamic forces to digital control systems.',
                    sections: [
                        {
                            title: '1. Four Forces of Flight',
                            content: `Every aircraft, including drones, must balance four fundamental forces:

**Thrust (T)** — Forward force generated by propellers
**Drag (D)** — Resistance to motion through air
**Lift (L)** — Upward force (for wings) or vertical thrust (for rotors)
**Weight (W)** — Gravitational force pulling downward

For a multirotor in hover: **T = W** (thrust equals weight)
For climb: **T > W**
For descent: **T < W**

In forward flight, the rotor disk tilts, creating both vertical and horizontal thrust components.`
                        },
                        {
                            title: '2. Aerodynamic Equations',
                            content: `**Lift Equation (for wings):**

\`\`\`
L = ½ · ρ · v² · S · CL
\`\`\`

Where:
• **ρ** (rho) = Air density (1.225 kg/m³ at sea level)
• **v** = Velocity relative to air
• **S** = Wing or rotor disk area
• **CL** = Coefficient of lift (depends on angle of attack α)

**Drag Equation:**

\`\`\`
D = ½ · ρ · v² · S · CD
\`\`\`

Total drag is split into:
• **Parasitic Drag**: Shape and skin friction (Dp = ½ · ρ · v² · S · CD0)
• **Induced Drag**: Byproduct of lift generation (Di = 2L² / (ρ · v² · π · b² · e))

Where **b** = wingspan, **e** = Oswald efficiency (0.7-0.9)

**Propeller Thrust:**

\`\`\`
T = CT · ρ · n² · D⁴
\`\`\`

**Power Required:**

\`\`\`
P = CP · ρ · n³ · D⁵
\`\`\`

Where:
• **n** = Rotational speed (revolutions per second)
• **D** = Propeller diameter
• **CT, CP** = Thrust and power coefficients

**Critical Insight:** Power scales with **n³** (RPM cubed). Flying 10% faster requires ~33% more power!

**Figure of Merit (Hover Efficiency):**

\`\`\`
FM = T^(3/2) / (P · √(2ρA))
\`\`\`

Ideal FM = 1.0, Real-world multirotors: 0.5-0.7`
                        },
                        {
                            title: '3. Motor Physics & Dynamics',
                            content: `Brushless motors convert electrical energy to mechanical rotation:

**Back-EMF (Electromotive Force):**

\`\`\`
VEMF = Ke · ω
\`\`\`

Where **Ke** = Motor voltage constant, **ω** = Angular velocity (rad/s)

**Motor Current:**

\`\`\`
I = (Vbattery - VEMF) / R
\`\`\`

**Torque:**

\`\`\`
τ = Kt · I
\`\`\`

Where **Kt** = Torque constant (N·m/A)

**KV Rating Relationship:**

\`\`\`
KV = 1000 / (Ke · (2π/60))
\`\`\`

KV tells you RPM per volt with no load. High KV (2300-2600) = fast, low torque. Low KV (1000-1500) = slow, high torque.

**Power Dissipation:**

\`\`\`
Pheat = I² · R
\`\`\`

Heat is the enemy—it reduces magnet strength and damages windings.`
                        },
                        {
                            title: '4. Control Theory: PID Controllers',
                            content: `Flight controllers use PID loops running at 4-8kHz to maintain stability.

**PID Equation (Continuous Time):**

\`\`\`
u(t) = Kp·e(t) + Ki·∫₀ᵗ e(τ)dτ + Kd·(de(t)/dt)
\`\`\`

**Discrete Implementation (TypeScript):**

\`\`\`typescript
class PIDController {
    kp: number; ki: number; kd: number;
    integral: number = 0;
    prevError: number = 0;
    prevMeasurement: number = 0;
    maxIntegral: number = 100;

    update(setpoint: number, measured: number, dt: number): number {
        const error = setpoint - measured;
        
        // P: Proportional term
        const P = this.kp * error;

        // I: Integral with anti-windup clamping
        this.integral += error * dt;
        this.integral = Math.max(-this.maxIntegral, 
                        Math.min(this.maxIntegral, this.integral));
        const I = this.ki * this.integral;

        // D: Derivative on MEASUREMENT (avoids derivative kick)
        const derivative = -(measured - this.prevMeasurement) / dt;
        const D = this.kd * derivative;

        this.prevMeasurement = measured;
        return P + I + D;
    }
}
\`\`\`

**Why Derivative on Measurement?**
When setpoint changes suddenly (pilot input), derivative of error spikes → "derivative kick" → violent response. Using derivative of measurement eliminates this.`
                        },
                        {
                            title: '5. Motor Mixing Mathematics',
                            content: `Converting pilot inputs (T, R, P, Y) into motor speeds:

**Quad X Configuration Matrix:**

\`\`\`
⎡ M1 ⎤   ⎡  1   1  -1  -1 ⎤   ⎡ Throttle ⎤
⎢ M2 ⎥ = ⎢  1   1   1   1 ⎥ · ⎢ Pitch    ⎥
⎢ M3 ⎥   ⎢  1  -1   1  -1 ⎥   ⎢ Roll     ⎥
⎣ M4 ⎦   ⎣  1  -1  -1   1 ⎦   ⎣ Yaw      ⎦
\`\`\`

Where M1=Front-Left, M2=Front-Right, M3=Back-Left, M4=Back-Right

**Saturation Handling (Airmode):**

When motor commands exceed limits [0, 1000]:

\`\`\`typescript
const motors = [m1, m2, m3, m4];
const maxMotor = Math.max(...motors);
const minMotor = Math.min(...motors);

if (maxMotor > 1000) {
    const offset = maxMotor - 1000;
    motors.forEach((m, i) => motors[i] -= offset);
}
if (minMotor < 0) {
    const offset = -minMotor;
    motors.forEach((m, i) => motors[i] += offset);
}
\`\`\`

This preserves attitude authority even at full throttle.`
                        },
                        {
                            title: '6. Sensor Fusion & State Estimation',
                            content: `Gyroscopes drift. Accelerometers are noisy. We fuse both for accurate orientation.

**Complementary Filter:**

\`\`\`
θest = α·(θgyro + ω·dt) + (1-α)·θaccel
\`\`\`

Where:
• **θest** = Estimated angle
• **ω** = Gyro rotation rate (rad/s)
• **θaccel** = Angle from gravity vector: arctan(ay/az)
• **α** = Trust factor (0.98-0.995)

**Why it Works:**
• Gyro is accurate short-term → High α trusts gyro integration
• Accel is accurate long-term → Low (1-α) corrects drift

**Extended Kalman Filter (EKF) - Advanced:**

Modern FCs use EKF for GPS/IMU fusion:

\`\`\`
Prediction:  x̂ₖ₊₁ = f(x̂ₖ, uₖ)
             Pₖ₊₁ = FₖPₖFₖᵀ + Qₖ

Update:      Kₖ = PₖHₖᵀ(HₖPₖHₖᵀ + Rₖ)⁻¹
             x̂ₖ = x̂ₖ + Kₖ(zₖ - h(x̂ₖ))
             Pₖ = (I - KₖHₖ)Pₖ
\`\`\`

EKF fuses accelerometer, gyro, GPS, barometer, and magnetometer into optimal state estimate.`
                        },
                        {
                            title: '7. Battery Physics',
                            content: `**LiPo Cell Chemistry:**

Nominal: 3.7V | Fully Charged: 4.2V | Depleted: 3.0V (NEVER go below!)

**State of Charge (SoC) vs. Voltage:**

\`\`\`
100%: 4.20V → 90%: 4.05V → 80%: 3.93V
50%: 3.80V → 20%: 3.70V → 0%: 3.00V
\`\`\`

Voltage drops FAST below 20% — this is why you land at 3.5V/cell.

**C-Rating Math:**

\`\`\`
Max Current = Capacity (Ah) × C-Rating
\`\`\`

Example: 1500mAh 100C battery:
Max = 1.5Ah × 100 = 150A burst current

**Internal Resistance (IR):**

\`\`\`
Vsag = I × Rinternal
\`\`\`

Under 100A load with 10mΩ IR:
Vsag = 100A × 0.010Ω = 1.0V drop!

This is why fresh batteries perform better—IR increases with age/cycles.

**Power Calculation:**

\`\`\`
P = V × I = I² × R = V² / R
\`\`\`

Example 6S system drawing 80A:
P = 22.2V × 80A = 1776W (over 2 horsepower!)`
                        }
                    ]
                }
            case 'pid-controllers':
                return {
                    intro: 'PID (Proportional-Integral-Derivative) controllers are the backbone of drone flight stability. They continuously calculate error values and apply corrections to keep your drone flying smoothly.',
                    sections: [
                        {
                            title: 'The Physics',
                            content: `At its core, a PID controller uses three components to maintain stability:

**Proportional (P):** Reacts to current error. If your drone tilts 10 degrees, P tries to correct proportionally - the bigger the tilt, the stronger the correction.

**Integral (I):** Addresses accumulated past errors. If your drone consistently drifts in one direction due to wind, I eliminates this steady-state error over time.

**Derivative (D):** Predicts future errors based on rate of change. It dampens oscillations by resisting rapid changes, preventing overshooting.

The magic happens when these three work together: P provides immediate response, I eliminates persistent drift, and D prevents wild oscillations.`
                        },
                        {
                            title: 'Mathematical Model',
                            content: `The PID algorithm can be expressed as:

\`\`\`
output(t) = Kp × e(t) + Ki × ∫e(τ)dτ + Kd × de(t)/dt
\`\`\`

Where:
- **e(t)** = error (difference between desired and actual state)
- **Kp, Ki, Kd** = tuning gains for each component
- **∫e(τ)dτ** = integral of error over time
- **de(t)/dt** = rate of change of error

In practical drone flight controller code, this is implemented discretely:

\`\`\`c
error = setpoint - measured_value
integral = integral + (error * dt)
derivative = (error - previous_error) / dt
output = (Kp * error) + (Ki * integral) + (Kd * derivative)
previous_error = error
\`\`\``
                        },
                        {
                            title: 'Tuning for Your Drone',
                            content: `Getting the right PID values is crucial:

**Start with P:** Increase until drone responds quickly but oscillates
**Add D:** Increase to dampen oscillations and smooth flight
**Fine-tune I:** Add slowly to eliminate drift without causing lag

Too much P = violent oscillations
Too much I = sluggish response and overshoot  
Too much D = resistance to stick inputs, jerky flight

Modern flight controllers like Betaflight use PID loops running at 8kHz or higher for incredibly smooth flight.`
                        }
                    ]
                }
            case 'battery-chemistry':
                return {
                    intro: 'LiPo (Lithium Polymer) batteries power most drones. Understanding their chemistry, C-ratings, and voltage behavior is critical for safe flying and maximum performance.',
                    sections: [
                        {
                            title: 'How LiPo Batteries Work',
                            content: `LiPo batteries store energy through lithium-ion movement between electrodes:

**Nominal Voltage:** 3.7V per cell (fully charged: 4.2V, depleted: 3.0V)
**Common Configurations:** 
- 3S = 11.1V (racing drones)
- 4S = 14.8V (high performance)
- 6S = 22.2V (maximum power)

The voltage sag during flight is normal - high current draw causes temporary voltage drop. A 4S battery under load might drop from 16.8V to 14.5V, which is why flight time estimates use average voltage.`
                        },
                        {
                            title: 'Understanding C-Ratings',
                            content: `The C-rating tells you maximum safe discharge rate:

**Formula:** Max Current = Capacity (Ah) × C-Rating

Example: A 1500mAh 75C battery can safely deliver:
1.5Ah × 75 = 112.5A continuous

Higher C-ratings mean:
✓ Less voltage sag under load
✓ Longer cycle life when not maxed out
✓ Better performance for high-power setups

But also:
✗ Higher cost
✗ More weight
✗ Manufacturers sometimes exaggerate ratings`
                        }
                    ]
                }
            case 'radio-frequency':
                return {
                    intro: 'Understanding radio frequency theory, antenna design, and wireless communication protocols that enable long-range drone control and FPV video transmission.',
                    sections: [
                        {
                            title: '1. Electromagnetic Spectrum & Drone Frequencies',
                            content: `Radio waves are electromagnetic radiation, just like visible light but at lower frequencies.

**Common Drone Frequencies:**

• **2.4 GHz** - RC control (most common), WiFi
• **5.8 GHz** - FPV video transmission (analog/digital)
• **900 MHz** - Long-range control (eLRS, R9)
• **433 MHz** - Telemetry (Europe), ultra-long-range
• **1.3 GHz** - Long-range video (deprecated)

**Wavelength Equation:**

λ = c / f

Where:
• **λ (lambda)** = Wavelength (meters)
• **c** = Speed of light (3 × 10⁸ m/s)
• **f** = Frequency (Hz)

Example: 2.4 GHz → λ = 3×10⁸ / 2.4×10⁹ = 0.125m = 12.5cm

**Why Frequency Matters:**
Higher frequency = shorter wavelength = smaller antennas BUT less penetration through obstacles.`
                        },
                        {
                            title: '2. Antenna Theory & Gain',
                            content: `Antennas convert electrical signals to electromagnetic waves and vice versa.

**Antenna Gain (dBi):**

Measures how well an antenna focuses energy in a particular direction compared to an isotropic radiator (perfect sphere).

G (dBi) = 10 log₁₀(Power in direction / Power isotropic)

**Common Antenna Types:**

• **Dipole** (2.1 dBi) - Omnidirectional, circular pattern
• **Cloverleaf/Skew Planar** (3-5 dBi) - Circular polarization for FPV
• **Pagoda** (5-7 dBi) - Circular polarization, high gain
• **Patch** (8-14 dBi) - Directional, long range
• **Helical** (10-15 dBi) - Circular polarization, very directional

**Quarter-Wave Monopole Length:**

L = λ / 4 = c / (4 × f)

For 2.4 GHz: L = 3×10⁸ / (4 × 2.4×10⁹) = 3.125 cm

**Polarization:**
• **Linear** - Dipole, simple but orientation-sensitive
• **Circular** - RHCP/LHCP, solves orientation problem (FPV standard)`
                        },
                        {
                            title: '3. Link Budget & Range Calculation',
                            content: `The **Friis Transmission Equation** predicts received power:

Pr = Pt + Gt + Gr - Lpath - Lmisc

In dB/dBm notation:
• **Pr** = Received power (dBm)
• **Pt** = Transmit power (dBm)
• **Gt** = Transmit antenna gain (dBi)
• **Gr** = Receive antenna gain (dBi)
• **Lpath** = Path loss (dB)
• **Lmisc** = Miscellaneous losses (cables, connectors)

**Free Space Path Loss (FSPL):**

FSPL (dB) = 20 log₁₀(d) + 20 log₁₀(f) + 20 log₁₀(4π/c)

Simplified at 2.4 GHz:
FSPL = 40.05 + 20 log₁₀(d_km)

At 5.8 GHz:
FSPL = 47.82 + 20 log₁₀(d_km)

**Example Calculation:**

1km range, 2.4 GHz, 100mW (20dBm) TX, dipole antennas (2dBi each):

FSPL = 40.05 + 20 log₁₀(1) = 40 dB
Pr = 20 + 2 + 2 - 40 - 3 = -19 dBm

If receiver sensitivity is -95 dBm → **76 dB fade margin** (excellent!)`
                        },
                        {
                            title: '4. Modulation Techniques',
                            content: `How data is encoded onto the carrier wave.

**Analog FM (Frequency Modulation):**

Traditional analog FPV video. Simple, low latency (~10ms), but no error correction.

Δf = kf × m(t)

Where:
• **Δf** = Frequency deviation
• **kf** = Modulation index
• **m(t)** = Message signal (video)

**Digital Modulation (Modern Systems):**

• **OFDM** (DJI, Walksnail) - Orthogonal Frequency Division Multiplexing
• **LoRa CSS** (ExpressLRS) - Chirp Spread Spectrum for long range
• **FHSS** (FrSky) - Frequency Hopping Spread Spectrum

**OFDM Advantages:**
✓ High spectral efficiency
✓ Resistant to multipath interference
✓ Error correction (forward error correction)

**LoRa/CSS Advantages:**
✓ Extreme range (50+ km reported)
✓ Low power consumption
✓ Penetrates obstacles well`
                        },
                        {
                            title: '5. ExpressLRS (ELRS) Deep Dive',
                            content: `ExpressLRS uses LoRa modulation at 900 MHz or 2.4 GHz.

**Packet Rate vs Range Tradeoff:**

• **500 Hz** - 4ms latency, ~1km range
• **250 Hz** - 8ms latency, ~2km range
• **50 Hz** - 40ms latency, ~15km range
• **25 Hz** - 80ms latency, ~30km+ range

**Sensitivity Equation:**

The receiver sensitivity improves with lower packet rates because spreading factor (SF) increases:

S (dBm) = -174 + 10 log₁₀(BW) + NF + SNRmin

Where:
• **-174 dBm/Hz** = Thermal noise floor
• **BW** = Bandwidth (Hz)
• **NF** = Noise figure (amplifier quality)
• **SNRmin** = Minimum SNR required (negative for LoRa!)

At 25 Hz, ELRS achieves **-130 dBm sensitivity** (incredible!)`
                        },
                        {
                            title: '6. FPV Video Transmission',
                            content: `**Analog VTX Power Levels:**

• 25 mW (14 dBm) - Indoor, short range
• 200 mW (23 dBm) - Park flying
• 600 mW (28 dBm) - Long range
• 1000 mW+ (30+ dBm) - Illegal in many regions without license

**Legal Limits:**
• USA (FCC): 1W EIRP on 5.8 GHz
• EU (CE): 25mW on 5.8 GHz (strictly enforced)
• UK: 25mW on 5.8 GHz

**Digital FPV Systems:**

• **DJI O3** - 50 Mbps, 1080p/100fps, ~4km range
• **Walksnail Avatar** - 50 Mbps, 1080p/60fps, ~3km range
• **HDZero** - 25 Mbps, 720p/90fps, low latency (~15ms)

**Latency Comparison:**

Analog: 10-20ms (glass-to-glass)
HDZero: 15ms
Walksnail: 25ms
DJI: 28-30ms

For racing, lower latency wins. For long-range, penetration and link robustness matter more.`
                        },
                        {
                            title: '7. Interference & Noise',
                            content: `**Signal-to-Noise Ratio (SNR):**

SNR (dB) = 10 log₁₀(Psignal / Pnoise)

Minimum SNR needed:
• Analog video: 10-15 dB (visible static below this)
• Digital QPSK: 8-10 dB
• LoRa SF7: -7.5 dB (works BELOW noise floor!)

**Sources of Interference:**

• WiFi routers (2.4 GHz)
• Bluetooth devices
• Microwave ovens (2.45 GHz, strong!)
• Other pilots (same frequency)
• Motor/ESC electrical noise

**Mitigation:**

• Use shielded video cables
• Add LC filter to VTX power line
• Separate video TX from FC/ESC (distance = better)
• Use diversity receivers (two antennas, switch to best)
• Circular polarization (rejects reflections)`
                        }
                    ]
                }
            case 'battery-chemistry':
                return {
                    intro: 'Deep dive into lithium polymer battery chemistry, discharge characteristics, internal resistance, and safe charging/storage practices for high-performance drone applications.',
                    sections: [
                        {
                            title: '1. LiPo Cell Chemistry & Voltage',
                            content: `Lithium Polymer batteries use a lithium-ion salt in a polymer electrolyte.

**Voltage per Cell:**

• **Fully Charged:** 4.20V (modern LiHV can go to 4.35V)
• **Nominal:** 3.7V (average during discharge)
• **Storage:** 3.80-3.85V (50% charge, longest lifespan)
• **Low Voltage Warning:** 3.50V (land immediately!)
• **Damaged:** 3.00V (never discharge below this)

**Common Configurations:**

• **3S** = 3 cells = 11.1V nominal (12.6V charged)
• **4S** = 4 cells = 14.8V nominal (16.8V charged)
• **6S** = 6 cells = 22.2V nominal (25.2V charged)

**State of Charge (SoC) Curve:**

100% → 4.20V
90% → 4.05V
80% → 3.93V
70% → 3.87V
50% → 3.80V (storage voltage)
20% → 3.70V (land now!)
0% → 3.00V (cell death)

Notice the voltage drops rapidly below 20% - this is why you land early!`
                        },
                        {
                            title: '2. C-Rating Mathematics',
                            content: `The C-rating determines maximum safe discharge current.

**Formula:**

Imax = Capacity (Ah) × C-Rating

**Example Calculations:**

1500mAh 75C battery:
Imax = 1.5Ah × 75 = 112.5A continuous

1300mAh 100C battery:
Imax = 1.3Ah × 100 = 130A continuous

850mAh 150C battery (racing):
Imax = 0.85Ah × 150 = 127.5A continuous

**Burst vs Continuous:**

Most manufacturers list burst C-rating (10-second peak):
• 75C continuous / 150C burst
• 100C continuous / 200C burst

Always design for continuous rating, not burst!

**C-Rating Reality Check:**

Many manufacturers exaggerate. Real-world testing shows:
• Budget packs: 50-70% of claimed C-rating
• Quality packs (Tattu, CNHL): 80-90% of claimed
• Racing packs (RDQ): ~100% accurate

**Power Calculation:**

P = V × I = V × (Capacity × C)

4S 1500mAh 100C at full throttle:
P = 14.8V × 130A = 1924W (~2.6 horsepower!)`
                        },
                        {
                            title: '3. Internal Resistance (IR)',
                            content: `Every battery has internal resistance that causes voltage sag under load.

**Ohm's Law Applied:**

Vsag = I × Rinternal

**Measuring IR:**

Use a battery analyzer or multimeter:
1. Measure voltage at rest (Vrest)
2. Apply known load (I)
3. Measure voltage under load (Vload)

IR = (Vrest - Vload) / I

**Example:**

Fresh 4S 1500mAh battery:
• Resting: 16.8V
• Under 100A load: 15.7V

IR = (16.8 - 15.7) / 100 = 0.011Ω = 11mΩ

**IR and Battery Health:**

• New battery: 5-15 mΩ (excellent)
• 50 cycles: 15-25 mΩ (good)
• 100 cycles: 25-35 mΩ (acceptable)
• 200+ cycles: 35-50+ mΩ (replace soon)

High IR means:
✗ More voltage sag
✗ Less available power
✗ More heat generation
✗ Shortened flight time

**Power Loss as Heat:**

Pheat = I² × R

At 100A draw with 20mΩ IR:
Pheat = 100² × 0.020 = 200W dissipated as heat!`
                        },
                        {
                            title: '4. Discharge Curves & Performance',
                            content: `Understanding how voltage changes during flight.

**Typical 4S Discharge Curve:**

At 50A continuous draw:
• 0-30 sec: 16.8V → 15.5V (initial sag)
• 30-90 sec: 15.5V → 15.0V (plateau)
• 90-150 sec: 15.0V → 14.2V (gradual decline)
• 150-180 sec: 14.2V → 14.0V (land warning)
• 180+ sec: Rapid voltage collapse

**Voltage Sag Factors:**

• Internal resistance (biggest factor)
• C-rating (higher = less sag)
• Temperature (cold = more sag)
• Battery age (older = more sag)
• Cell balance (unbalanced = uneven sag)

**Practical Flight Time Estimation:**

Capacity (mAh) × Voltage × 0.8 / Power (W) = Minutes

Example: 1500mAh 4S at 500W average:
1500 × 14.8 × 0.8 / 500 = 3.55 minutes

(0.8 factor accounts for 80% usable capacity and efficiency losses)

**Why Not Discharge to 3.0V?**

Below 3.5V per cell:
• Copper dendrites form (permanent damage)
• Capacity permanently reduced
• Internal resistance increases
• Fire risk increases during charging`
                        },
                        {
                            title: '5. Charging Theory & Safety',
                            content: `LiPo charging is a two-stage process: Constant Current (CC) then Constant Voltage (CV).

**CC Phase (Bulk Charge):**

I = Capacity × Charge_Rate

For 1500mAh at 1C:
I = 1.5A

For 1500mAh at 2C (fast charge):
I = 3.0A

Charges from ~3.7V to ~4.15V

**CV Phase (Balance/Top-off):**

Voltage held at 4.20V per cell
Current tapers: 1.5A → 0.5A → 0.1A → 0.05A
Stops when I < 0.05C (75mA for 1500mAh)

**Charge Rate Safety:**

• **1C** - Standard, safest, longest lifespan
• **2C** - Fast charge, reduces lifespan 20%
• **3C+** - Racing only, significant degradation

**Temperature Monitoring:**

Never charge if:
• Pack temperature > 40°C (104°F)
• Ambient temperature < 0°C (32°F)
• Pack is puffed or damaged

**Balance Charging:**

Essential for multi-cell packs. Balancer ensures all cells reach 4.20V:

Cell 1: 4.19V → balancer discharges to match
Cell 2: 4.20V → target
Cell 3: 4.21V → balancer discharges to match

Imbalance > 0.1V indicates a bad pack!`
                        },
                        {
                            title: '6. Storage & Lifespan',
                            content: `Proper storage dramatically extends battery life.

**Storage Voltage (3.80-3.85V per cell):**

At storage voltage, lithium plating is minimized and SEI (Solid Electrolyte Interface) layer remains stable.

**Storage Duration vs Damage:**

Fully charged (4.20V) storage:
• 1 week: 5% capacity loss
• 1 month: 15% capacity loss
• 3 months: 30-50% capacity loss

Proper storage (3.85V):
• 1 month: <1% capacity loss
• 6 months: 3-5% capacity loss
• 1 year: 10-15% capacity loss

**Self-Discharge Rate:**

~2-3% per month at storage voltage
~5-7% per month at full charge

**Cycle Life Expectations:**

• Careful use (1C charge, 50C discharge, storage): 200-300 cycles
• Normal use (2C charge, 75C discharge): 150-200 cycles
• Racing (2C charge, 100C+ discharge): 50-100 cycles

**Signs of Battery Death:**

• Puffing (gas buildup from decomposition)
• Cell voltage difference > 0.1V
• IR increased > 50% from new
• Capacity < 80% of rated
• Sudden voltage drops mid-flight`
                        },
                        {
                            title: '7. Fire Safety & Disposal',
                            content: `LiPo fires are serious! The electrolyte is flammable and oxygen-generating.

**What Causes LiPo Fires:**

• Physical damage (puncture, crush)
• Overcharge (>4.25V per cell)
• Over-discharge (<2.5V per cell)
• High temperature (>60°C internal)
• Internal short circuit (dendrites)
• Charging damaged/puffed pack

**Fire Prevention:**

• Always use LiPo-safe charging bags
• Never charge unattended
• Set accurate cell count on charger
• Inspect before every charge
• Charge in fireproof location
• Have ABC fire extinguisher nearby

**If a Fire Starts:**

• DO: Use ABC extinguisher or sand
• DO: Let it burn outside if safe
• DON'T: Use water (spreads burning electrolyte!)
• DON'T: Try to save the battery

**Safe Disposal:**

1. Discharge to 0V (salt water bath: 1 hour per Ah)
2. Verify 0V with multimeter
3. Cut leads separately
4. Take to battery recycling center (hardware stores)

**Salt Water Discharge:**

Solution: 1 tablespoon salt per gallon water
Submerge with leads separated
Wait: 1500mAh = 1.5 hours minimum

Check voltage afterward - must read 0V on all cells!`
                        }
                    ]
                }
            default:
                return {
                    intro: `Exploring the scientific principles and mathematical foundations of ${title}.`,
                    sections: [
                        {
                            title: 'Core Principles',
                            content: `This topic covers fundamental concepts in drone technology and physics.`
                        }
                    ]
                }
        }
    }

    const content = getContent(title)

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            <div className="container max-w-5xl py-12 px-4 md:px-6 lg:px-8">
                <Link href="/science">
                    <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Science
                    </Button>
                </Link>

                <article className="space-y-8">
                    <header className="space-y-6 border-b pb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            {content.intro}
                        </p>
                    </header>

                    {content.sections.map((section, idx) => (
                        <section key={idx} className="space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-6">
                                {section.title}
                            </h2>
                            <div
                                className="text-base md:text-lg leading-7 max-w-4xl mx-auto"
                                dangerouslySetInnerHTML={{
                                    __html: section.content
                                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/```(\w*)\n([\s\S]+?)```/g, '<div class="bg-muted/50 p-4 rounded-md font-mono text-sm my-3 overflow-x-auto"><code>$2</code></div>')
                                        .replace(/```\n([\s\S]+?)```/g, '<div class="bg-muted/50 p-4 rounded-md font-mono text-sm my-3 overflow-x-auto"><code>$1</code></div>')
                                        .replace(/• /g, '<span class="text-primary">•</span> ')
                                        .replace(/\n\n/g, '</p><p class="mt-3">')
                                        .replace(/^(.+)$/gm, (match, p1) => {
                                            if (!p1.trim().startsWith('<')) return `<p class="mt-2">${p1}</p>`;
                                            return p1;
                                        })
                                }}
                            />
                        </section>
                    ))}


                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <div className="bg-muted/50 rounded-xl p-6 border">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                📊 Key Formulas
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• PID Output = Kp·e + Ki·∫e + Kd·de/dt</li>
                                <li>• Battery Current = Capacity × C-Rating</li>
                                <li>• Power (W) = Voltage (V) × Current (A)</li>
                            </ul>
                        </div>

                        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                            <h3 className="text-xl font-semibold mb-3">💡 Pro Tip</h3>
                            <p className="text-sm leading-relaxed">
                                Always test configurations in a safe environment. Start conservative with tuning
                                and make small incremental changes while observing flight characteristics.
                            </p>
                        </div>
                    </div>
                </article >
            </div >
        </div >
    )
}
