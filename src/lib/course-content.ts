
export type CoursePage = {
    id: string;
    title: string;
    content: string; // HTML content
    image?: string;
};

export type CourseModule = {
    id: string;
    title: string;
    pages: CoursePage[];
};

export type CourseContent = {
    [courseSlug: string]: {
        [moduleId: string]: CourseModule;
    };
};

export const courseContent: CourseContent = {
    "beginner-build": {
        "1": {
            id: "1",
            title: "Introduction & Safety",
            pages: [
                {
                    id: "1",
                    title: "Welcome to Drone Building",
                    image: "/images/courses/drone-workbench.png",
                    content: `
                        <p class="lead">Welcome to the exciting world of drone building! In this course, you'll go from zero knowledge to piloting your own custom-built quadcopter.</p>
                        
                        <h3>Why Build Instead of Buy?</h3>
                        <p>Building your own drone gives you:</p>
                        <ul>
                            <li><strong>Complete Understanding:</strong> You'll know exactly how every part works.</li>
                            <li><strong>Repairability:</strong> When (not if) you crash, you'll know how to fix it.</li>
                            <li><strong>Customization:</strong> You can upgrade and tweak your drone to match your flying style.</li>
                            <li><strong>Satisfaction:</strong> There's nothing like the feeling of flying something you built with your own hands.</li>
                        </ul>

                        <h3>What We'll Build</h3>
                        <p>We will be building a standard <strong>5-inch freestyle quadcopter</strong>. This is the most versatile and popular class of FPV drone, capable of carrying a GoPro, flying fast, and performing acrobatics.</p>
                    `
                },
                {
                    id: "2",
                    title: "Safety First",
                    content: `
                        <h3>The Golden Rules of Drone Safety</h3>
                        <p>Drones are not toys. A spinning propeller can cause serious injury. Before we touch a screwdriver, we must agree to these safety rules:</p>
                        
                        <div class="alert alert-danger">
                            <strong>ALWAYS remove propellers</strong> when working on your drone on the bench. This is the #1 rule. If the motors spin up accidentally with props on, it will cause damage to you and your room.
                        </div>

                        <ul>
                            <li><strong>LiPo Safety:</strong> Lithium Polymer batteries can catch fire if mistreated. Never charge unattended. Store at storage voltage (3.8V/cell).</li>
                            <li><strong>Solder Fumes:</strong> Solder in a well-ventilated area. Don't breathe the fumes.</li>
                            <li><strong>Short Circuits:</strong> Use a "Smoke Stopper" (current limiter) when plugging in your battery for the first time.</li>
                        </ul>
                    `
                },
                {
                    id: "3",
                    title: "Tools You Need",
                    content: `
                        <h3>Essential Tools</h3>
                        <p>To build a drone, you'll need a specific set of tools. Here's your shopping list:</p>
                        
                        <ul>
                            <li><strong>Soldering Iron:</strong> A good temperature-controlled iron (TS100, TS80, or similar) is crucial. Don't use a cheap stick iron.</li>
                            <li><strong>Solder:</strong> 60/40 leaded solder is easiest to work with. Rosin core.</li>
                            <li><strong>Hex Drivers:</strong> M2 and M3 sizes (1.5mm, 2.0mm, 2.5mm). High-quality drivers prevent stripped screws.</li>
                            <li><strong>Wire Cutters/Strippers:</strong> For preparing motor and battery wires.</li>
                            <li><strong>Tweezers:</strong> For holding small wires and components.</li>
                            <li><strong>Multimeter:</strong> Essential for checking for short circuits.</li>
                        </ul>
                    `
                },
                {
                    id: "4",
                    title: "Workspace Setup",
                    content: `
                        <h3>Setting Up Your Bench</h3>
                        <p>A clean, organized workspace makes the build process much smoother.</p>
                        
                        <ul>
                            <li><strong>Lighting:</strong> Good lighting is key for soldering small pads.</li>
                            <li><strong>Mat:</strong> A silicone soldering mat protects your table and organizes screws.</li>
                            <li><strong>Ventilation:</strong> A small fan to push solder fumes away from your face.</li>
                            <li><strong>Organization:</strong> Muffin tins or magnetic trays are great for keeping screws sorted.</li>
                        </ul>
                    `
                },
                {
                    id: "5",
                    title: "Legal Requirements",
                    content: `
                        <h3>Know the Law</h3>
                        <p>Before you fly, you must understand the regulations in your country (FAA in USA, EASA in EU, etc.).</p>
                        
                        <ul>
                            <li><strong>Registration:</strong> Most drones over 250g must be registered.</li>
                            <li><strong>Remote ID:</strong> New regulations may require a Remote ID module.</li>
                            <li><strong>No-Fly Zones:</strong> Never fly near airports, government buildings, or over people.</li>
                            <li><strong>Line of Sight:</strong> Keep your drone within visual line of sight (unless you have a spotter for FPV).</li>
                        </ul>
                    `
                }
            ]
        },
        "2": {
            id: "2",
            title: "Understanding Components",
            pages: [
                {
                    id: "1",
                    title: "The Frame",
                    image: "/images/courses/drone-components.png",
                    content: `
                        <h3>The Skeleton</h3>
                        <p>The frame holds everything together. For this build, we recommend a <strong>carbon fiber X-frame</strong>.</p>
                        <p>Carbon fiber is incredibly strong and lightweight. The "X" shape provides balanced flight characteristics.</p>
                    `
                },
                {
                    id: "2",
                    title: "Motors & Propellers",
                    content: `
                        <h3>The Muscle</h3>
                        <p><strong>Brushless Motors:</strong> We'll use 2306 or 2207 size motors around 2400KV (for 4S battery) or 1750KV (for 6S battery).</p>
                        <p><strong>Propellers:</strong> 5-inch props. The pitch (angle) determines how "bitey" they feel. Lower pitch = smoother, higher pitch = faster.</p>
                    `
                },
                {
                    id: "3",
                    title: "The Stack (FC & ESC)",
                    content: `
                        <h3>The Brain and Heart</h3>
                        <p><strong>Flight Controller (FC):</strong> The computer. It has a gyro to sense movement and a processor to calculate motor outputs.</p>
                        <p><strong>Electronic Speed Controller (ESC):</strong> The power handler. It takes commands from the FC and pumps power to the motors. We'll use a 4-in-1 ESC stack.</p>
                    `
                },
                {
                    id: "4",
                    title: "Video System (FPV)",
                    content: `
                        <h3>The Eyes</h3>
                        <p><strong>Camera:</strong> Sits at the front, sends video to the VTX.</p>
                        <p><strong>Video Transmitter (VTX):</strong> Beams the video signal to your goggles. We'll focus on analog for cost, but digital (DJI/Walksnail) is an option.</p>
                        <p><strong>Antenna:</strong> Crucial for clear signal. Don't power on VTX without an antenna!</p>
                    `
                },
                {
                    id: "5",
                    title: "Radio Receiver (RX)",
                    content: `
                        <h3>The Control Link</h3>
                        <p>The receiver listens to your remote controller. We highly recommend <strong>ELRS (ExpressLRS)</strong>. It offers incredible range and reliability for a low price.</p>
                    `
                }
            ]
        },
        "3": {
            id: "3",
            title: "Assembly Process",
            pages: [
                {
                    id: "1",
                    title: "Frame Assembly",
                    image: "/images/courses/soldering.png",
                    content: `
                        <h3>Building the Skeleton</h3>
                        <p>Start by assembling the carbon fiber frame. Use threadlocker (blue Loctite) on all metal-to-metal screws to prevent vibrations from loosening them.</p>
                    `
                },
                {
                    id: "2",
                    title: "Mounting Motors",
                    content: `
                        <h3>Installing Motors</h3>
                        <p>Screw the motors onto the arms. Ensure the wires point towards the center of the frame. Use the correct length screws - too long and they'll touch the windings and burn the motor!</p>
                    `
                },
                {
                    id: "3",
                    title: "Soldering the ESC",
                    content: `
                        <h3>Power Connections</h3>
                        <p>Tin the pads on the ESC first. Then cut motor wires to length and solder them to the ESC pads. Solder the battery lead (XT60) with a capacitor.</p>
                        <p><strong>Tip:</strong> Good flux makes soldering much easier.</p>
                    `
                },
                {
                    id: "4",
                    title: "Installing the FC",
                    content: `
                        <h3>Mounting the Brain</h3>
                        <p>Mount the Flight Controller on top of the ESC using soft mounting gummies (to dampen vibrations). Connect the wire harness between ESC and FC.</p>
                    `
                },
                {
                    id: "5",
                    title: "Peripherals (Cam, VTX, RX)",
                    content: `
                        <h3>Connecting the Rest</h3>
                        <p>Solder the Camera, VTX, and Receiver to the Flight Controller. Refer to the wiring diagram (pinout) of your specific FC.</p>
                        <ul>
                            <li>Camera: 5V, Gnd, Video In</li>
                            <li>VTX: 7-28V (usually), Gnd, Video Out, SmartAudio (TX pad)</li>
                            <li>RX: 5V, Gnd, TX, RX</li>
                        </ul>
                    `
                }
            ]
        },
        "4": {
            id: "4",
            title: "Software Configuration",
            pages: [
                {
                    id: "1",
                    title: "Betaflight Configurator",
                    image: "/images/courses/betaflight.png",
                    content: `
                        <h3>Connecting to PC</h3>
                        <p>Download Betaflight Configurator. Plug your drone in via USB. If it doesn't connect, you may need driver fixers (ImpulseRC Driver Fixer).</p>
                    `
                },
                {
                    id: "2",
                    title: "Flashing Firmware",
                    content: `
                        <h3>Updating</h3>
                        <p>Go to the Firmware Flasher tab. Select your board target and the latest stable version. Flash it. (Make sure to back up if it came pre-tuned, but for a new build, fresh is good).</p>
                    `
                },
                {
                    id: "3",
                    title: "Ports & Configuration",
                    content: `
                        <h3>Setting up Communication</h3>
                        <p><strong>Ports Tab:</strong> Enable "Serial RX" on the UART your receiver is connected to. Enable "TBS SmartAudio" or "IRC Tramp" on the VTX UART.</p>
                        <p><strong>Configuration Tab:</strong> Set ESC protocol to DSHOT600. Set Board Alignment if you mounted the FC rotated.</p>
                    `
                },
                {
                    id: "4",
                    title: "Receiver & Modes",
                    content: `
                        <h3>Control Setup</h3>
                        <p><strong>Receiver Tab:</strong> Check that stick movements match the preview. (AETR1234 map). Verify endpoints (1000-2000).</p>
                        <p><strong>Modes Tab:</strong> Set up an ARM switch (AUX1). Set up a Mode switch (Angle/Horizon/Acro) on AUX2.</p>
                    `
                },
                {
                    id: "5",
                    title: "OSD Setup",
                    content: `
                        <h3>Heads Up Display</h3>
                        <p>Configure what you see in your goggles. Essential elements: Battery Voltage, Flight Time, Warnings.</p>
                    `
                }
            ]
        },
        "5": {
            id: "5",
            title: "First Flight & Tuning",
            pages: [
                {
                    id: "1",
                    title: "Pre-Flight Checks",
                    image: "/images/courses/flying.png",
                    content: `
                        <h3>The Bench Test</h3>
                        <p><strong>Props OFF!</strong> Plug in battery. Check video. Check radio control. Arm the drone (motors should spin). Disarm. Failsafe test: Turn off radio while armed - motors should stop.</p>
                    `
                },
                {
                    id: "2",
                    title: "Prop Direction",
                    content: `
                        <h3>Props On</h3>
                        <p>Ensure props are on correctly! "Props in" or "Props out" configuration must match Betaflight. Writing on props always faces UP.</p>
                    `
                },
                {
                    id: "3",
                    title: "The Maiden Hover",
                    content: `
                        <h3>First Liftoff</h3>
                        <p>Go to a safe, open grassy area. Stand back. Arm. Gently raise throttle. If it freaks out, disarm immediately (check board alignment/motor order). If it hovers, congrats!</p>
                    `
                },
                {
                    id: "4",
                    title: "Basic Tuning",
                    content: `
                        <h3>Making it Locked In</h3>
                        <p>Default Betaflight PIDs are usually good. If it feels "loose", increase P and D. If it oscillates (shakes), decrease P and D. Use the sliders in PID Tuning tab.</p>
                    `
                },
                {
                    id: "5",
                    title: "Maintenance",
                    content: `
                        <h3>Keep it Flying</h3>
                        <p>Clean dirt/grass after crashes. Check for loose screws. Inspect wires for cuts. Replace bent props immediately to save your motors.</p>
                    `
                }
            ]
        }
    },
    "fpv-racing": {
        "1": {
            id: "1",
            title: "FPV System Overview",
            pages: [
                {
                    id: "1",
                    title: "Introduction to FPV",
                    image: "/images/courses/fpv-goggles.png",
                    content: `
                        <h3>The Pilot's Perspective</h3>
                        <p class="lead">First Person View (FPV) is what separates a camera drone from a sport drone. It puts you inside the machine.</p>
                        <p>Instead of looking at the drone from the ground (Line of Sight), you wear video goggles that show you exactly what the drone sees in real-time. This allows for precise control at high speeds and through tight obstacles.</p>
                        <p>The FPV system consists of three main parts:</p>
                        <ul>
                            <li><strong>Camera:</strong> Captures the video.</li>
                            <li><strong>VTX (Video Transmitter):</strong> Sends the video wirelessly.</li>
                            <li><strong>VRX (Video Receiver):</strong> Receives the video (usually inside your goggles).</li>
                        </ul>
                    `
                },
                {
                    id: "2",
                    title: "Analog vs Digital",
                    content: `
                        <h3>The Great Debate</h3>
                        <p><strong>Analog:</strong> The old school standard. The video looks like an old TV (static, low resolution), but it has <strong>zero latency</strong>. It's cheap, lightweight, and degrades gracefully (you get static before you lose picture completely).</p>
                        <p><strong>Digital (DJI / Walksnail / HDZero):</strong> The modern revolution. High Definition (720p/1080p) video. It feels like flying a video game. 
                        <ul>
                            <li><strong>DJI/Walksnail:</strong> Beautiful image, variable latency (can lag slightly).</li>
                            <li><strong>HDZero:</strong> Fixed low latency, but slightly lower image quality than DJI.</li>
                        </ul>
                        <p><strong>Verdict:</strong> For pure racing, HDZero or Analog is preferred for speed. For freestyle and enjoyment, DJI/Walksnail is king.</p>
                    `
                },
                {
                    id: "3",
                    title: "Goggles Selection",
                    content: `
                        <h3>Your Window to the World</h3>
                        <p><strong>Box Goggles:</strong> Look like a VR headset. One big screen. Cheaper, good for glasses wearers, but bulky.</p>
                        <p><strong>Low Profile (Binocular) Goggles:</strong> Two small screens (one for each eye). Compact, professional look. Usually use OLED screens for perfect blacks and vibrant colors.</p>
                        <div class="alert"><strong>Tip:</strong> Never leave your goggles sitting in direct sunlight! The lenses act like magnifying glasses and will burn holes in your screens instantly.</div>
                    `
                },
                {
                    id: "4",
                    title: "Antenna Theory",
                    content: `
                        <h3>The Magic Mushrooms</h3>
                        <p>We use <strong>Circular Polarization (CP)</strong> for FPV. This spirals the signal so it bounces off walls better without losing connection (multipath rejection).</p>
                        <ul>
                            <li><strong>RHCP (Right Hand):</strong> The standard.</li>
                            <li><strong>LHCP (Left Hand):</strong> Used to fly with others (one on RHCP, one on LHCP) to reduce interference.</li>
                        </ul>
                        <p><strong>Gain (dBi):</strong>
                        <ul>
                            <li><strong>Omni (Low Gain):</strong> Receives/sends in a donut shape. Good for flying all around you.</li>
                            <li><strong>Patch (High Gain):</strong> Focuses signal in a beam. Great for long range, bad for flying behind yourself.</li>
                        </ul>
                    `
                },
                {
                    id: "5",
                    title: "Frequencies & Bands",
                    content: `
                        <h3>Staying Legal and Clear</h3>
                        <p>We fly on the <strong>5.8GHz</strong> band. It's divided into "Bands" (A, B, E, F, R) and "Channels" (1-8).</p>
                        <p><strong>Raceband (R):</strong> The standard for racing. It spreads the channels out evenly so up to 8 pilots can fly at once.</p>
                        <p><strong>Pit Mode:</strong> A special mode that drops VTX power to almost zero so you can plug in your drone without blasting other pilots out of the sky.</p>
                    `
                }
            ]
        },
        "2": {
            id: "2",
            title: "Advanced Components",
            pages: [
                {
                    id: "1",
                    title: "Racing Frames",
                    image: "/images/courses/racing-frame.png",
                    content: `
                        <h3>Built for Speed</h3>
                        <p>Racing frames are the Formula 1 cars of the drone world. They prioritize speed and durability over everything else.</p>
                        <ul>
                            <li><strong>Minimalist Design:</strong> Less carbon fiber means less weight. A typical racing frame weighs only 50-70 grams.</li>
                            <li><strong>Stretched X Geometry:</strong> The arms are longer front-to-back. This increases stability on the pitch axis, which is crucial because racers fly at steep forward angles (50°+).</li>
                            <li><strong>Durability:</strong> Arms are usually thick (5mm-6mm) individual pieces. If you break an arm in a crash, you can swap just that one arm instead of replacing the whole frame.</li>
                        </ul>
                    `
                },
                {
                    id: "2",
                    title: "High KV Motors",
                    content: `
                        <h3>RPM = Speed</h3>
                        <p>For freestyle, we like torque and smoothness. For racing, we want raw RPM and explosive power.</p>
                        <ul>
                            <li><strong>Freestyle:</strong> 2306 2400KV. Good low-end control.</li>
                            <li><strong>Racing:</strong> 2207 2700KV or even 2004 3000KV (for lightweight builds).</li>
                        </ul>
                        <p><strong>Warning:</strong> High KV motors draw massive current. A full throttle punch can pull 150 Amps! You need high-quality batteries to keep up.</p>
                    `
                },
                {
                    id: "3",
                    title: "ESCs for Racing",
                    content: `
                        <h3>Handling the Power</h3>
                        <p>The ESC (Electronic Speed Controller) is the most stressed component in a racing drone.</p>
                        <p><strong>Requirements:</strong></p>
                        <ul>
                            <li><strong>Current Rating:</strong> At least 45A or 60A continuous.</li>
                            <li><strong>Firmware:</strong> BLHeli_32 or AM32. These support 128kHz PWM frequency, which makes motors run smoother and cooler.</li>
                            <li><strong>Heat Dissipation:</strong> Look for ESCs with a metal heatsink to help shed the massive heat generated during a race.</li>
                        </ul>
                    `
                },
                {
                    id: "4",
                    title: "F7/H7 Flight Controllers",
                    content: `
                        <h3>Processing Power</h3>
                        <p>At 100mph, every millisecond of latency matters.</p>
                        <p>We run "Loop Times" of 8kHz, meaning the drone calculates corrections 8,000 times a second. Older F4 processors struggle with this, especially when running advanced features like RPM Filtering.</p>
                        <p><strong>Recommendation:</strong> Use an F722 or H743 processor. They are fast enough to run everything without "cpu overload" lockups.</p>
                    `
                },
                {
                    id: "5",
                    title: "High C-Rating Batteries",
                    content: `
                        <h3>The Fuel Tank</h3>
                        <p>Battery "Sag" is the enemy. If voltage drops under load, your top speed drops.</p>
                        <p><strong>C-Rating:</strong> This number tells you how fast the battery can discharge. For racing, you need "True" 100C+ packs.</p>
                        <p><strong>Capacity:</strong> Racers use smaller batteries (1100mAh - 1300mAh) to save weight. A race only lasts 2 minutes, so we don't need big heavy packs.</p>
                    `
                }
            ]
        },
        "3": {
            id: "3",
            title: "Building for Performance",
            pages: [
                {
                    id: "1",
                    title: "Weight Savings",
                    content: `
                        <h3>Gram Shaving</h3>
                        <p>A lighter drone accelerates faster, stops quicker, and corners tighter. In racing, every gram counts.</p>
                        <p><strong>Pro Tips for Weight Reduction:</strong></p>
                        <ul>
                            <li><strong>Direct Solder:</strong> Remove heavy plastic connectors and solder motor wires directly to the ESC pads.</li>
                            <li><strong>Short Wires:</strong> Cut every wire to the exact length needed. No "service loops".</li>
                            <li><strong>Titanium Screws:</strong> Replace steel screws with titanium. It costs more but saves about 15g on a full build.</li>
                            <li><strong>Naked GoPro:</strong> If filming, strip the case off the GoPro to save 70g.</li>
                        </ul>
                    `
                },
                {
                    id: "2",
                    title: "Soft Mounting",
                    content: `
                        <h3>Killing Vibrations</h3>
                        <p>Vibrations are noise. If the gyro hears noise, the flight controller gets confused and the motors get hot.</p>
                        <p><strong>Essential Steps:</strong></p>
                        <ul>
                            <li><strong>FC Gummies:</strong> Always use silicone grommets (gummies) when mounting the Flight Controller.</li>
                            <li><strong>Motor Soft Mounts:</strong> TPU pads under the motors can help on older frames, but a stiff frame is usually better.</li>
                            <li><strong>Capacitor:</strong> Secure your capacitor so it doesn't wobble and break its legs during flight.</li>
                        </ul>
                    `
                },
                {
                    id: "3",
                    title: "Capacitors",
                    content: `
                        <h3>Cleaning the Noise</h3>
                        <p>ESCs create massive "electrical noise" when switching power to motors. This noise can cause video lines and gyro twitches.</p>
                        <p><strong>The Fix:</strong> Solder a <strong>Low-ESR Capacitor (1000uF 35V)</strong> directly to the battery pads of your ESC.</p>
                        <p><em>Physics:</em> The capacitor acts as a reservoir, filling up when voltage spikes and releasing energy when it dips, smoothing out the power delivery.</p>
                    `
                },
                {
                    id: "4",
                    title: "Camera Angle",
                    content: `
                        <h3>The Need for Speed</h3>
                        <p>To fly forward, you tilt the drone. The faster you want to go, the more you have to tilt.</p>
                        <ul>
                            <li><strong>Freestyle (20°-30°):</strong> Good for looking around and flying slowly.</li>
                            <li><strong>Racing (50°-60°):</strong> When the drone is tilted 60° forward, the camera is looking straight at the horizon. This allows you to fly at 80mph while seeing where you are going.</li>
                        </ul>
                        <p><em>Note:</em> Landing with 60° camera tilt is very difficult!</p>
                    `
                },
                {
                    id: "5",
                    title: "Antenna Placement",
                    content: `
                        <h3>Saving Your Signal</h3>
                        <p>Carbon fiber is conductive and blocks radio signals (RF). Never mount your antenna flat against the carbon frame.</p>
                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li><strong>Clearance:</strong> Get the active part of the antenna up and away from the frame.</li>
                            <li><strong>Durability:</strong> Use a TPU mount. Rigid mounts break in a crash; TPU bends.</li>
                            <li><strong>Stubby Antennas:</strong> For racing, long antennas get chopped by props. Use short "stubby" antennas protected by the frame cage.</li>
                        </ul>
                    `
                }
            ]
        },
        "4": {
            id: "4",
            title: "Racing Firmware",
            pages: [
                {
                    id: "1",
                    title: "RPM Filtering",
                    content: `
                        <h3>The Game Changer</h3>
                        <p>Bidirectional DSHOT is a protocol that lets the ESC talk back to the Flight Controller. It reports the exact RPM of every motor in real-time.</p>
                        <p><strong>Why it matters:</strong> The FC uses this data to set "Notch Filters" that surgically remove motor noise frequencies. This allows you to turn off other filters, reducing latency and making the drone feel "locked in."</p>
                    `
                },
                {
                    id: "2",
                    title: "Rate Profiles",
                    content: `
                        <h3>Stick Feel</h3>
                        <p>"Rates" determine how the drone translates your stick movements into rotation.</p>
                        <ul>
                            <li><strong>RC Rate:</strong> The overall sensitivity.</li>
                            <li><strong>Super Rate:</strong> Sensitivity at the ends of the stick (for fast flips).</li>
                            <li><strong>Expo:</strong> Softens the center stick feel for precision flying.</li>
                        </ul>
                        <p><em>Pro Tip:</em> Most racers use low rates (600-800 deg/sec) for better resolution, while freestylers use high rates (1000+ deg/sec) for snappy tricks.</p>
                    `
                },
                {
                    id: "3",
                    title: "Feed Forward",
                    content: `
                        <h3>Predicting the Future</h3>
                        <p>Standard PIDs react to error (what happened in the past). <strong>Feed Forward (FF)</strong> reacts to your stick input (what you want to happen now).</p>
                        <p>High FF pushes the motors hard the instant you move the stick. This reduces the delay between your thumb moving and the drone moving. It is essential for navigating tight race tracks.</p>
                    `
                },
                {
                    id: "4",
                    title: "Throttle Limit",
                    content: `
                        <h3>Power Control</h3>
                        <p>A modern 6S racing drone has too much power for most indoor tracks. It becomes uncontrollable.</p>
                        <p><strong>Motor Output Limit:</strong> In Betaflight, you can scale the output down to 75% or 80%. This gives you the full resolution of your throttle stick but caps the top speed, making the drone much easier to manage.</p>
                    `
                },
                {
                    id: "5",
                    title: "Blackbox Logging",
                    content: `
                        <h3>Data Analysis</h3>
                        <p>Your Flight Controller has a "Blackbox" that records flight data 2,000 times a second.</p>
                        <p><strong>What to look for:</strong></p>
                        <ul>
                            <li><strong>Noise:</strong> Fuzzy lines in the gyro trace mean you have mechanical vibrations.</li>
                            <li><strong>Step Response:</strong> How fast does the gyro follow your setpoint? If it lags, increase P or FF. If it overshoots, increase D.</li>
                        </ul>
                    `
                }
            ]
        },
        "5": {
            id: "5",
            title: "FPV Flying & Racing",
            pages: [
                {
                    id: "1",
                    title: "Simulators",
                    content: `
                        <h3>Save Money, Fly Sim</h3>
                        <p><strong>Do not learn to fly on a real drone.</strong> You will crash. You will break parts. You will spend money.</p>
                        <p><strong>The Path to Success:</strong></p>
                        <ol>
                            <li>Buy a radio controller (e.g., Radiomaster Pocket/Zorro).</li>
                            <li>Download a simulator (Velocidrone, Liftoff, Uncrashed).</li>
                            <li>Fly for 10-20 hours. Practice "Acro Mode" only.</li>
                            <li>Once you can complete 5 laps of a track without crashing, you are ready for the real thing.</li>
                        </ol>
                    `
                },
                {
                    id: "2",
                    title: "Gate Practice",
                    content: `
                        <h3>Hitting the Apex</h3>
                        <p>Racing is about precision. Set up a simple track with 2 or 3 gates.</p>
                        <p><strong>Technique:</strong></p>
                        <ul>
                            <li><strong>Look Ahead:</strong> Don't look at the gate you are going through. Look at the <em>next</em> gate. Your hands will naturally guide the drone there.</li>
                            <li><strong>The Apex:</strong> Aim for the inside of the turn. It's the shortest distance.</li>
                        </ul>
                    `
                },
                {
                    id: "3",
                    title: "Throttle Control",
                    content: `
                        <h3>The Hardest Skill</h3>
                        <p>Beginners "pump" the throttle, causing the drone to bounce up and down. This loses grip and control.</p>
                        <p><strong>Goal:</strong> Keep the throttle steady. Listen to the motors. A consistent hum is better than "WAAAA-wub-WAAAA-wub".</p>
                        <p><em>Exercise:</em> Fly low to the ground (1 foot) at a constant speed. Try to keep your altitude perfectly level.</p>
                    `
                },
                {
                    id: "4",
                    title: "Racing Lines",
                    content: `
                        <h3>Flow is Fast</h3>
                        <p>The fastest way around a track is not a series of straight lines. It's a smooth curve.</p>
                        <p><strong>Setup the Turn:</strong> Swing wide <em>before</em> the gate so you can turn in early and carry speed <em>through</em> the gate. If you turn late, you drift wide and lose time.</p>
                    `
                },
                {
                    id: "5",
                    title: "Race Day",
                    content: `
                        <h3>Competition Time</h3>
                        <p>Racing is stressful! Adrenaline makes your hands shake.</p>
                        <p><strong>Checklist:</strong></p>
                        <ul>
                            <li><strong>Video Channel:</strong> Ensure you are on your assigned channel (R1, R2, etc.). Never plug in if others are flying!</li>
                            <li><strong>FailSafe:</strong> Test it on the bench.</li>
                            <li><strong>Spotter:</strong> You need a friend to watch your drone and tell you if you crash.</li>
                            <li><strong>Mindset:</strong> Breathe. Focus on smooth laps. Consistency beats raw speed.</li>
                        </ul>
                    `
                }
            ]
        }
    },
    "autonomous-flight": {
        "1": {
            id: "1",
            title: "Autonomous Systems",
            pages: [
                {
                    id: "1",
                    title: "What is Autonomy?",
                    content: `
                        <h3>Robots that Think</h3>
                        <p class="lead">Autonomous flight means the drone flies itself. You are a "Mission Commander," not a pilot.</p>
                        <p>Unlike manual FPV flying where you constantly adjust the sticks, an autonomous drone uses a suite of sensors to calculate its own position and stability. It follows a pre-programmed path or makes decisions based on real-time data.</p>
                        <p><strong>Key Applications:</strong></p>
                        <ul>
                            <li><strong>Mapping & Surveying:</strong> Creating 3D models of construction sites.</li>
                            <li><strong>Agriculture:</strong> Spraying crops or analyzing plant health (NDVI).</li>
                            <li><strong>Search & Rescue:</strong> Scanning large areas for missing persons using thermal cameras.</li>
                            <li><strong>Delivery:</strong> Transporting medical supplies or packages.</li>
                        </ul>
                    `
                },
                {
                    id: "2",
                    title: "ArduPilot vs PX4",
                    content: `
                        <h3>The Software Stack</h3>
                        <p>Just like computers have Windows and macOS, autonomous drones have operating systems (Firmware).</p>
                        <p><strong>ArduPilot:</strong> The most mature and feature-rich option. It supports Copter, Plane, Rover, Sub, and Blimp. It is known for its reliability and is widely used in commercial industrial drones. <em>We will focus on ArduPilot in this course.</em></p>
                        <p><strong>PX4:</strong> A more modular, research-focused stack. It is often preferred by developers who want to write their own custom flight algorithms or integrate with ROS (Robot Operating System).</p>
                    `
                },
                {
                    id: "3",
                    title: "Hardware Requirements",
                    content: `
                        <h3>More than just a Gyro</h3>
                        <p>A racing drone just needs a gyro to stay upright. An autonomous drone needs to know <em>where</em> it is and <em>how fast</em> it's moving.</p>
                        <ul>
                            <li><strong>Barometer:</strong> Measures air pressure to calculate Altitude.</li>
                            <li><strong>Compass (Magnetometer):</strong> Measures the Earth's magnetic field to determine Heading (North/South).</li>
                            <li><strong>GPS (GNSS):</strong> Triangulates signals from satellites to determine Position (Latitude/Longitude).</li>
                            <li><strong>Airspeed Sensor:</strong> (For planes) Measures how fast the air is moving over the wings.</li>
                            <li><strong>Telemetry Radio:</strong> A data link to send status updates to your laptop ground station.</li>
                        </ul>
                    `
                },
                {
                    id: "4",
                    title: "GPS Systems",
                    content: `
                        <h3>Accuracy Matters</h3>
                        <p><strong>Standard GPS (M8N/M9N):</strong> The most common type. Accurate to within <strong>2-3 meters</strong>. This is fine for general flying, but not for precision work.</p>
                        <p><strong>RTK GPS (Real Time Kinematic):</strong> A game changer. It uses a fixed "Base Station" on the ground to calculate error corrections and sends them to the drone.</p>
                        <p><strong>Result:</strong> Accuracy to within <strong>2 centimeters</strong>. This is essential for photogrammetry (mapping) where every pixel counts.</p>
                    `
                },
                {
                    id: "5",
                    title: "Safety Protocols",
                    content: `
                        <h3>Don't Create a Skynet</h3>
                        <p>Autonomous drones are robots. If a sensor fails, they can behave unpredictably ("Fly-aways").</p>
                        <div class="alert"><strong>Rule #1:</strong> Always have a "Manual Override" switch on your radio. If the drone starts acting weird, flip the switch to "Stabilize" mode to take full manual control instantly.</div>
                        <p><strong>Geofence:</strong> A virtual cage you draw on the map. If the drone hits the invisible wall, it will automatically stop or Return to Launch (RTL).</p>
                    `
                }
            ]
        },
        "2": {
            id: "2",
            title: "Pixhawk Setup",
            pages: [
                {
                    id: "1",
                    title: "The Cube (Pixhawk 2.1)",
                    content: `
                        <h3>The Orange Cube</h3>
                        <p>The "Cube" (formerly Pixhawk 2.1) is the industry standard flight controller for professional drones.</p>
                        <p><strong>Why is it so good?</strong></p>
                        <ul>
                            <li><strong>Redundancy:</strong> It has 3 IMUs (Gyros/Accelerometers). If one fails, the others take over.</li>
                            <li><strong>Vibration Isolation:</strong> The sensors are floating on internal foam to dampen motor vibrations.</li>
                            <li><strong>Heated IMU:</strong> It keeps the sensors at a constant temperature so they work perfectly in freezing winter or hot summer.</li>
                        </ul>
                    `
                },
                {
                    id: "2",
                    title: "Power Modules",
                    content: `
                        <h3>Clean Power is Critical</h3>
                        <p>You cannot just plug a battery into a Pixhawk. You need a high-quality <strong>Power Module</strong> (like the Mauch or Hex Here Power).</p>
                        <p><strong>Functions:</strong></p>
                        <ol>
                            <li>Converts high battery voltage (e.g., 24V 6S) to a clean 5.3V for the flight controller.</li>
                            <li>Measures <strong>Voltage</strong> and <strong>Current (Amps)</strong> so the drone knows how much fuel is left.</li>
                        </ol>
                        <p><em>Pro Tip:</em> Always calibrate your voltage sensor with a multimeter for accurate readings.</p>
                    `
                },
                {
                    id: "3",
                    title: "GPS Mounting",
                    content: `
                        <h3>Compass Interference</h3>
                        <p>The compass is the most sensitive sensor. The high current flowing through your battery wires and motors creates a magnetic field that confuses the compass.</p>
                        <p><strong>Solution:</strong> Mount the GPS/Compass module on a <strong>tall mast</strong> (stand). This physically separates it from the interference sources.</p>
                        <p><strong>Orientation:</strong> Always point the arrow on the GPS forward! If it's rotated, you must set the "COMPASS_ORIENT" parameter in software.</p>
                    `
                },
                {
                    id: "4",
                    title: "Telemetry Radios",
                    content: `
                        <h3>The Data Link</h3>
                        <p>Telemetry radios create a wireless bridge between your drone and your laptop (Ground Control Station) using the <strong>MAVLink</strong> protocol.</p>
                        <ul>
                            <li><strong>915 MHz:</strong> Used in the Americas. Long range, penetrates trees well.</li>
                            <li><strong>433 MHz:</strong> Used in Europe. Even longer range.</li>
                        </ul>
                        <p>With telemetry, you can see the drone's position on a map, monitor battery levels, and even change the mission mid-flight.</p>
                    `
                },
                {
                    id: "5",
                    title: "Safety Switch",
                    content: `
                        <h3>The Red Button</h3>
                        <p>Pixhawk systems have a physical safety button that lights up. Even if you "Arm" the drone via software, the motors will <strong>not spin</strong> until you physically press and hold this safety switch.</p>
                        <p>This is a critical safety feature for large drones with dangerous propellers. It prevents accidental spin-ups while you are working near the drone.</p>
                    `
                }
            ]
        },
        "3": {
            id: "3",
            title: "ArduPilot Config",
            pages: [
                {
                    id: "1",
                    title: "Mission Planner",
                    content: `
                        <h3>Ground Control Station (GCS)</h3>
                        <p><strong>Mission Planner</strong> is the primary software for configuring ArduPilot on Windows. (Mac/Linux users often use QGroundControl).</p>
                        <p>It is a powerful tool that allows you to:</p>
                        <ul>
                            <li>Flash firmware to the board.</li>
                            <li>Calibrate all sensors.</li>
                            <li>Plan complex autonomous missions.</li>
                            <li>Analyze flight logs after the flight.</li>
                        </ul>
                        <p><em>SITL (Software In The Loop):</em> You can even simulate a drone on your PC without any hardware!</p>
                    `
                },
                {
                    id: "2",
                    title: "Accel Calibration",
                    content: `
                        <h3>Knowing Down</h3>
                        <p>You must teach the drone what "level" is. The Accelerometer Calibration wizard will ask you to hold the drone in 6 positions:</p>
                        <p><strong>Level, Left Side, Right Side, Nose Down, Nose Up, and Back.</strong></p>
                        <p>Do this precisely! If you calibrate it crooked, the drone will always drift or fly at an angle. Use a spirit level for the "Level" step.</p>
                    `
                },
                {
                    id: "3",
                    title: "Compass Calibration",
                    content: `
                        <h3>The Compass Dance</h3>
                        <p>The compass needs to know the local magnetic environment. Go outside, away from cars, buildings, and metal fences.</p>
                        <p>Click "Start Calibration" and rotate the drone around all axes (spin it, flip it, roll it) until the progress bars fill up. You will look silly doing it, but it's absolutely necessary for accurate navigation.</p>
                    `
                },
                {
                    id: "4",
                    title: "Radio Calibration",
                    content: `
                        <h3>Teaching the Limits</h3>
                        <p>The flight controller needs to know the range of your radio sticks.</p>
                        <p>Move your sticks to their absolute limits (corners). The software records the Minimum (approx 1000us) and Maximum (approx 2000us) PWM values for each channel.</p>
                        <p>Also, verify that the bars move in the correct direction (e.g., pushing throttle up makes the green bar go up).</p>
                    `
                },
                {
                    id: "5",
                    title: "Flight Modes",
                    content: `
                        <h3>Selecting Behavior</h3>
                        <p>Assign flight modes to a 3-position or 6-position switch on your radio:</p>
                        <ul>
                            <li><strong>Stabilize:</strong> Fully manual, self-leveling. Use this for takeoff/landing or emergencies.</li>
                            <li><strong>Loiter:</strong> GPS Position Hold. The drone stays locked in one spot. Great for filming.</li>
                            <li><strong>PosHold:</strong> Like Loiter, but feels more like manual flight when you move the sticks.</li>
                            <li><strong>Auto:</strong> The drone executes the uploaded mission plan automatically.</li>
                            <li><strong>RTL (Return to Launch):</strong> The drone rises to a safe altitude, flies home, and lands itself.</li>
                        </ul>
                    `
                }
            ]
        },
        "4": {
            id: "4",
            title: "Mission Planning",
            pages: [
                {
                    id: "1",
                    title: "Waypoints",
                    content: `
                        <h3>Connect the Dots</h3>
                        <p>In the "Flight Plan" tab of Mission Planner, you can click on the map to add Waypoints.</p>
                        <p>For each point, you can set:</p>
                        <ul>
                            <li><strong>Altitude:</strong> How high to fly (Relative to home).</li>
                            <li><strong>Speed:</strong> How fast to travel to this point.</li>
                            <li><strong>Delay:</strong> How long to hover at the point before moving on.</li>
                        </ul>
                    `
                },
                {
                    id: "2",
                    title: "Survey Grid",
                    content: `
                        <h3>Automated Mapping</h3>
                        <p>Want to map a field? You don't need to place 100 waypoints manually.</p>
                        <p>Draw a polygon around the area. Right-click and select <strong>Auto WP -> Survey (Grid)</strong>.</p>
                        <p>Mission Planner will automatically generate a "lawnmower" flight path. It calculates the perfect spacing to ensure your photos overlap enough for 3D reconstruction software.</p>
                        <p><em>Terrain Following:</em> If you have terrain data loaded, the drone can adjust its altitude to stay a constant height above the hills.</p>
                    `
                },
                {
                    id: "3",
                    title: "ROI (Region of Interest)",
                    content: `
                        <h3>Cinematic Camera Control</h3>
                        <p>Normally, a drone faces the direction it is flying. But what if you want to fly a circle <em>around</em> a statue while looking <em>at</em> it?</p>
                        <p>Set a <strong>DO_SET_ROI</strong> command on the map. Now, no matter where the drone flies, its nose (and camera) will stay locked pointing at that specific coordinate.</p>
                    `
                },
                {
                    id: "4",
                    title: "Failsafes",
                    content: `
                        <h3>What If Things Go Wrong?</h3>
                        <p>You must configure failsafes before flying autonomous missions.</p>
                        <ul>
                            <li><strong>Battery Failsafe:</strong> If voltage drops below 14V, trigger RTL (Return to Launch).</li>
                            <li><strong>Radio Failsafe:</strong> If the RC link is lost, trigger RTL.</li>
                            <li><strong>GCS Failsafe:</strong> If the telemetry link to the laptop is lost, you can choose to "Continue Mission" or RTL.</li>
                        </ul>
                    `
                },
                {
                    id: "5",
                    title: "Uploading",
                    content: `
                        <h3>Send to Drone</h3>
                        <p>Planning is done on the laptop. You must click <strong>"Write Waypoints"</strong> to save the mission to the drone's onboard memory.</p>
                        <p><strong>To Fly:</strong> Arm the drone in Loiter mode. Take off to a safe height. Flip your switch to <strong>Auto</strong>. The drone will turn towards Waypoint 1 and begin the mission!</p>
                    `
                }
            ]
        },
        "5": {
            id: "5",
            title: "Advanced Apps",
            pages: [
                {
                    id: "1",
                    title: "Precision Landing",
                    content: `
                        <h3>Hitting the Bullseye</h3>
                        <p>GPS is only accurate to 2 meters. If you are landing on a charging pad or a delivery box, that's not good enough.</p>
                        <p><strong>IR-Lock:</strong> A system that uses an infrared beacon on the ground and a special camera on the drone. The drone "sees" the beacon and adjusts its descent to land exactly on top of it.</p>
                        <p><em>Fiducial Markers:</em> Newer systems use QR-code like markers (ArUco) for visual landing.</p>
                    `
                },
                {
                    id: "2",
                    title: "Obstacle Avoidance",
                    content: `
                        <h3>Don't Hit the Tree</h3>
                        <p>For true autonomy, a drone must see the world.</p>
                        <p>By adding a <strong>360-degree Lidar</strong> or <strong>Depth Cameras</strong> (like Intel Realsense), the drone can build a local map of obstacles.</p>
                        <p>ArduPilot uses "BendyRuler" or "Dijkstra" algorithms to plan a path around the obstacles in real-time while still trying to reach the destination.</p>
                    `
                },
                {
                    id: "3",
                    title: "Follow Me",
                    content: `
                        <h3>The Virtual Leash</h3>
                        <p>In this mode, the drone follows the GPS position of the pilot (or a vehicle).</p>
                        <p>This is great for filming boats, bikes, or cars. You can set a specific offset (e.g., "Follow 10 meters behind and 5 meters up").</p>
                        <div class="alert"><strong>Warning:</strong> Basic Follow Me does not have obstacle avoidance! Watch out for trees.</div>
                    `
                },
                {
                    id: "4",
                    title: "Payload Delivery",
                    content: `
                        <h3>Dropping Packages</h3>
                        <p>ArduPilot supports <strong>Grippers</strong> and <strong>Servos</strong>.</p>
                        <p>You can add a "DO_SET_SERVO" command to your mission. For example: "Fly to Waypoint 4. Descend to 5 meters. Open Gripper (release package). Wait 2 seconds. Return to Launch."</p>
                    `
                },
                {
                    id: "5",
                    title: "Swarm",
                    content: `
                        <h3>Strength in Numbers</h3>
                        <p>Swarming allows one pilot to control multiple drones simultaneously.</p>
                        <p>The drones communicate their positions to each other over a mesh network to avoid collisions. This technology is used for dazzling light shows and large-scale search and rescue operations.</p>
                        <p><em>Lua Scripting:</em> You can write custom scripts to make the drones dance or perform complex coordinated tasks.</p>
                    `
                }
            ]
        }
    }
};
